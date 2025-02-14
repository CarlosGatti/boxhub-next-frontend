interface User {
  permissions: string[]
}

interface validateUserPermissionsParams {
  user: User
  permissions?: string[]
}

export function validateUserPermissions({
  user,
  permissions,
}: validateUserPermissionsParams) {
  if (permissions && permissions?.length > 0) {
    const hasAllPermissions = permissions.every((permission) => {
      return user.permissions.includes(permission)
    })

    if (!hasAllPermissions) {
      return false
    }
  }

  return true
}
