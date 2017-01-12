import _ from 'underscore';

const validTenants = ['tenant1', 'tenant2'];

class Tenant {
    constructor() {

    }
    getName() {

        let tenantName = document.location.host.split(".")[0];
        if (_.contains(validTenants, tenantName))
            return tenantName;
        else
            return 'invalid';

    }

    getTheme() {
        let tenantName = this.getName();
        if (tenantName !== 'invalid')
            return './styles/'.concat(tenantName).concat('.theme.scss');
        else
            return './styles/default.theme.scss';
    }
}



export default new Tenant;