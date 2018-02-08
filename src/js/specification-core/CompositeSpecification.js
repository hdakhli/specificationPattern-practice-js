import ISpecification from './ISpecification';

export default class CompositeSpecification extends ISpecification {

    and (spec) {
        return new AndSpecification(this, spec);
    }

    or (spec) {
        return new OrSpecification(this, spec);
    }

    not () {
        return new NotSpecification(this);
    }
}

class NotSpecification extends CompositeSpecification {

    constructor (firstSpec) {
        super();
        this.firstSpec = firstSpec;
    }

    isSatisfiedBy (candidate) {
        return !this.firstSpec.isSatisfiedBy(candidate);
    }
}

class AndSpecification extends CompositeSpecification {

    constructor (firstSpec, secondSpec) {
        super();
        this.firstSpec = firstSpec;
        this.secondSpec = secondSpec;
    }

    isSatisfiedBy (candidate) {
        return this.firstSpec.isSatisfiedBy(candidate) && this.secondSpec.isSatisfiedBy(candidate);
    }
}

class OrSpecification extends CompositeSpecification {

    constructor (firstSpec, secondSpec) {
        super();
        this.firstSpec = firstSpec;
        this.secondSpec = secondSpec;
    }

    isSatisfiedBy (candidate) {
        return this.firstSpec.isSatisfiedBy(candidate) || this.secondSpec.isSatisfiedBy(candidate);
    }
}