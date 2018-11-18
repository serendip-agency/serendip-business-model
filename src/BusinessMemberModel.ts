export class BusinessMemberModel {
  userId: string;

  // user's groups name
  groups: string[];

  scope: {
    entityName: string;
    permissions: ("read" | "write" | "delete" | "update" | "trigger")[];
  }[];

  // user's email for mail.serendip.cloud
  crmails: string[];
}
