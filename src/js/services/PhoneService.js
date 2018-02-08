export class PhoneService {

    constructor() {
        // init
        this.phones = [];
    }

    fetchAllPhones() {
        this.phones = this.fetchPhonesFromApi();
    }

    fetchPhonesFromApi() {
        // fetch phones from repository
        return [];
    }

    setPhones(phones) {
        this.phones = phones;
    }

    /**
     * Premium (cost >= 400 and not basic phones)
     * @return All premium phones
     */
    getAllPremiumPhones() {
        return this.phones.filter(phone => phone.cost >= 400 && phone.type !== 'BASIC');
    }

    /**
     * @return Only brand Samsung
     */
    getSamsungPhones() {
        return this.phones.filter(phone => phone.brand === 'SAMSUNG');
    }

    /**
     * @return Only premium brand Samsung
     */
    getPremiumSamsungPhones() {
        return this.phones.filter(phone => phone.brand === 'SAMSUNG' && phone.cost >= 400 && phone.type !== 'BASIC');
    }

    /**
     * @return Either brand Samsung or HTC
     */
    getSamsungAndHTCPhones() {
        return this.phones.filter(phone => phone.brand === 'SAMSUNG' || phone.brand === 'HTC');
    }

    /**
     * @return All premium and brand Samsung or HTC
     */
    getPremiumSamsungAndHTCPhones() {
        return this.phones.filter(phone => (phone.brand === 'SAMSUNG' || phone.brand === 'HTC') && phone.cost >= 400 && phone.type !== 'BASIC');
    }

    /**
     * @return All but brand Samsung
     */
    getAllExceptSamsungPhones() {
        return this.phones.filter(phone => phone.brand !== 'SAMSUNG');
    }

    /**
     * @return All premium but brand Samsung and htc
     */
    getAllPremiumExceptSamsungAndHTCPhones() {
        return this.phones.filter(phone => (phone.brand !== 'SAMSUNG' && phone.brand !== 'HTC') && phone.cost >= 400 && phone.type !== 'BASIC');
    }

}