import Specification from '../specification-core/Specification';

export default class PremiumPhoneSpecification extends Specification {

    isSatisfiedBy (phone) {
        return phone.cost >= 400 && phone.type !== 'BASIC';
    }

}