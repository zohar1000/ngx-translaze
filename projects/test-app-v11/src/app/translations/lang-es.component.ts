import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SecondaryLangText } from '../../environments/environment';

@Component({
  selector: 'app-lang-es',
  template: ''
})
export class LangEsComponent {
  // Spanish
  text: SecondaryLangText = {
    language: {
      name: 'spanish',
      code: 'es'
    },
    general: {
      brandName: '',
      email: 'Email',
      password: 'Password',
      buttons: {
        cancel: 'Cancel',
        add: 'Add',
        update: 'Update'
      },
      columns: {
        id: 'ID',
        edit: 'Edit',
        delete: 'Delete'
      }
    },
    errors: {
      editFormNotChanged: 'There are no changes to update',
      loginFailed: 'incorrect user/password',
      cannotOperateOnHigherRole: 'You cannot operate on a role higher than yours',
      itemDoesNotExist: '{item} does not exist',
      alreadyUsedEmail: 'The email address is already being used',
    },
    success: {
      itemWasAdded: '{entity} {id} was added successfully',
      itemWasUpdated: '{entity} {id} was update successfully',
      itemWasDeleted: '{entity} {id} was deleted successfully'
    },
    navbar: {
      logo: 'Logo',
      header: 'Header',
      logout: 'Logout'
    },
    pages: {
      about: {
        title: 'This is about page in SPANISH'
      },
      login: {
        title: 'Login'
      },
      dashboard: {
        title: 'DashboardES'
      },
      users: {
        title: 'Users',
        addUser: {
          title: 'Add User',
          firstName: 'First Name',
          lastName: 'Last Name',
          role: 'Role',
          status: 'Status',
          email: 'Email',
          password: 'Password',
        },
        list: {
          title: 'Users',
          lastLoginTime: 'Last Login Time'
        }
      }
    }
  }
}
