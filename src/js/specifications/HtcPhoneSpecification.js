import CompositeSpecification from '../specification-core/CompositeSpecification';

export default class PremiumPhoneSpecification extends CompositeSpecification {

    isSatisfiedBy (phone) {
        return phone.brand === 'HTC';
    }

}