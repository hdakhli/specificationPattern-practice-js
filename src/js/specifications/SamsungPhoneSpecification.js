import CompositeSpecification from '../specification-core/CompositeSpecification';

export default class SamsungPhoneSpecification extends CompositeSpecification {

    isSatisfiedBy (phone) {
        return phone.brand === 'SAMSUNG';
    }

}