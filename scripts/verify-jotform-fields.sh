#!/usr/bin/env bash
# Compare contact-form.html Jotform field names against the live form HTML.
# Usage: yarn verify:jotform   (or: ./scripts/verify-jotform-fields.sh)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PARTIAL="$ROOT/layouts/partials/blocks/contact-form.html"
CONFIG="$ROOT/config.toml"

if [[ ! -f "$PARTIAL" ]]; then
  echo "error: missing $PARTIAL" >&2
  exit 1
fi

FORM_ID="$(rg -o 'jotform_form_id\s*=\s*"([0-9]+)"' -r '$1' "$CONFIG" | head -1)"
if [[ -z "$FORM_ID" ]]; then
  echo "error: jotform_form_id not found in config.toml" >&2
  exit 1
fi

# Question fields only (skip formID / simple_spc / honeypot).
mapfile -t EXPECTED < <(rg -o 'name="(q[0-9]+_[^"]+)"' -r '$1' "$PARTIAL" | sort -u)
if [[ ${#EXPECTED[@]} -eq 0 ]]; then
  echo "error: no q*_ field names found in contact-form.html" >&2
  exit 1
fi

TMP="$(mktemp)"
trap 'rm -f "$TMP"' EXIT

fetch_ok=0
for base in "https://form.jotform.com" "https://eu.jotform.com"; do
  if curl -fsSL --max-time 30 -A 'SportingChance-verify-jotform/1.0' \
    "$base/$FORM_ID" -o "$TMP" 2>/dev/null; then
    fetch_ok=1
    echo "Fetched live form from $base/$FORM_ID"
    break
  fi
done

if [[ "$fetch_ok" -ne 1 ]]; then
  echo "error: could not fetch live Jotform HTML for form $FORM_ID" >&2
  exit 1
fi

mapfile -t LIVE < <(rg -o 'name="(q[0-9]+_[^"]+)"' -r '$1' "$TMP" | sort -u)

missing=()
for name in "${EXPECTED[@]}"; do
  found=0
  for live in "${LIVE[@]}"; do
    if [[ "$live" == "$name" ]]; then
      found=1
      break
    fi
  done
  if [[ "$found" -eq 0 ]]; then
    missing+=("$name")
  fi
done

# Live form may include fields we don't render; only fail on site→live gaps.
unmapped=()
for live in "${LIVE[@]}"; do
  found=0
  for name in "${EXPECTED[@]}"; do
    if [[ "$live" == "$name" ]]; then
      found=1
      break
    fi
  done
  if [[ "$found" -eq 0 ]]; then
    unmapped+=("$live")
  fi
done

echo "Site fields (${#EXPECTED[@]}): ${EXPECTED[*]}"
echo "Live q*_ fields (${#LIVE[@]}): ${LIVE[*]}"

if [[ ${#unmapped[@]} -gt 0 ]]; then
  echo "info: live form has q*_ fields not posted by the site: ${unmapped[*]}"
fi

if [[ ${#missing[@]} -gt 0 ]]; then
  echo "FAIL: site field names missing from live form $FORM_ID:" >&2
  printf '  - %s\n' "${missing[@]}" >&2
  echo "Update layouts/partials/blocks/contact-form.html to match Jotform, or fix the form in the dashboard." >&2
  exit 1
fi

echo "OK: all ${#EXPECTED[@]} site field names match live Jotform form $FORM_ID"
