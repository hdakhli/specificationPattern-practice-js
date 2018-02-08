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
     * Premium (cost >= 400)
     * @return All premium phones
     */
    getAllPremiumPhones() {
        return this.phones;
    }

    /**
     * @return Only brand Samsung
     */
    getSamsungPhones() {
        return this.phones;
    }

    /**
     * @return Only premium brand Samsung
     */
    getPremiumSamsungPhones() {
        return this.phones;
    }

    /**
     * @return Either brand Samsung or HTC
     */
    getSamsungAndHTCPhones() {
        return this.phones;
    }

    /**
     * @return All premium and brand Samsung or HTC
     */
    getPremiumSamsungAndHTCPhones() {
        return this.phones;
    }

    /**
     * @return All but brand Samsung
     */
    getAllExceptSamsungPhones() {
        return this.phones;
    }

    /**
     * @return All premium but brand Samsung and htc
     */
    getAllPremiumExceptSamsungAndHTCPhones() {
        return this.phones;
    }

}