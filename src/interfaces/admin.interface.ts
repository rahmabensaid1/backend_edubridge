export interface CreateAdmin {
  department?: string;
  canManageUsers?: boolean;
  canManageEvents?: boolean;
  canManageInstitutions?: boolean;
}
