import CompositeSpecification from '../specification-core/CompositeSpecification';

export default class HtcPhoneSpecification extends CompositeSpecification {

    isSatisfiedBy (phone) {
        return phone.brand === 'HTC';
    }

}