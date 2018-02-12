import Specification from '../specification-core/Specification';

export default class SamsungPhoneSpecification extends Specification {

    isSatisfiedBy (phone) {
        return phone.brand === 'SAMSUNG';
    }

}