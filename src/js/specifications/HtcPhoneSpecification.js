import Specification from '../specification-core/Specification';

export default class HtcPhoneSpecification extends Specification {

    isSatisfiedBy (phone) {
        return phone.brand === 'HTC';
    }

}