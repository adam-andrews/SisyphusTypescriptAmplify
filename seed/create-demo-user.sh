#!/usr/bin/env bash
# Creates the "pass" demo login in the Cognito user pool from amplify_outputs.json.
# Run from the project root after the backend (sandbox or hosted) has deployed:
#   bash seed/create-demo-user.sh            # uses the "sisphus" AWS profile
#   AWS_PROFILE=other bash seed/create-demo-user.sh
set -euo pipefail

EMAIL="pass@pass.com"
PASSWORD="Password1!"
PROFILE="${AWS_PROFILE:-sisphus}"

POOL_ID=$(node -e "console.log(require('./amplify_outputs.json').auth.user_pool_id)")
REGION=$(node -e "console.log(require('./amplify_outputs.json').auth.aws_region)")

aws cognito-idp admin-create-user \
  --profile "$PROFILE" --region "$REGION" \
  --user-pool-id "$POOL_ID" \
  --username "$EMAIL" \
  --user-attributes Name=email,Value="$EMAIL" Name=email_verified,Value=true \
  --message-action SUPPRESS

# Make the password permanent so there's no "change password" prompt on first login
aws cognito-idp admin-set-user-password \
  --profile "$PROFILE" --region "$REGION" \
  --user-pool-id "$POOL_ID" \
  --username "$EMAIL" \
  --password "$PASSWORD" \
  --permanent

echo "Demo user $EMAIL created in $POOL_ID"
