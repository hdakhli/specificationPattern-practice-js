import PremiumPhoneSpecification from '../specifications/PremiumPhoneSpecification';
import SamsungPhoneSpecification from '../specifications/SamsungPhoneSpecification';
import HtcPhoneSpecification from '../specifications/HtcPhoneSpecification';

export class PhoneService {

    constructor() {
        // init
        this.phones = [];
        this.premiumSpec = new PremiumPhoneSpecification();
        this.samsungSpec = new SamsungPhoneSpecification();
        this.htcSpec = new HtcPhoneSpecification();
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
     * Premium (cost >= 400 && not Basic)
     * @return All premium phones
     */
    getAllPremiumPhones() {
        return this.phones.filter(phone => this.premiumSpec.isSatisfiedBy(phone));
    }

    /**
     * @return Only brand Samsung
     */
    getSamsungPhones() {
        return this.phones.filter(phone => this.samsungSpec.isSatisfiedBy(phone));
    }

    /**
     * @return Only premium brand Samsung
     */
    getPremiumSamsungPhones() {
        return this.phones.filter(phone => this.premiumSpec.and(this.samsungSpec).isSatisfiedBy(phone));
    }

    /**
     * @return Either brand Samsung or HTC
     */
    getSamsungAndHTCPhones() {
        return this.phones.filter(phone => this.samsungSpec.or(this.htcSpec).isSatisfiedBy(phone));
    }

    /**
     * @return All premium and brand Samsung or HTC
     */
    getPremiumSamsungAndHTCPhones() {
        return this.phones.filter(phone => this.premiumSpec.and(this.samsungSpec.or(this.htcSpec)).isSatisfiedBy(phone));
    }

    /**
     * @return All but brand Samsung
     */
    getAllExceptSamsungPhones() {
        return this.phones.filter(phone => this.samsungSpec.not().isSatisfiedBy(phone));
    }

    /**
     * @return All premium but brand Samsung and htc
     */
    getAllPremiumExceptSamsungAndHTCPhones() {
        return this.phones.filter(phone => this.premiumSpec.and(this.samsungSpec.not()).and(this.htcSpec.not()).isSatisfiedBy(phone));
    }

}