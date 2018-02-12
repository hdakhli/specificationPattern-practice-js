export default class Specification {

    isSatisfiedBy(obj) {
        throw new Error("not implemented");
    }

    and(spec) {
        return new AndSpecification(this, spec);
    }

    or(spec) {
        return new OrSpecification(this, spec);
    }

    not() {
        return new NotSpecification(this);
    }
}

class NotSpecification extends Specification {

    constructor(spec) {
        super();
        this.spec = spec;
    }

    isSatisfiedBy(candidate) {
        return !this.spec.isSatisfiedBy(candidate);
    }
}

class AndSpecification extends Specification {

    constructor(firstSpec, secondSpec) {
        super();
        this.firstSpec = firstSpec;
        this.secondSpec = secondSpec;
    }

    isSatisfiedBy(candidate) {
        return this.firstSpec.isSatisfiedBy(candidate) && this.secondSpec.isSatisfiedBy(candidate);
    }
}

class OrSpecification extends Specification {

    constructor(firstSpec, secondSpec) {
        super();
        this.firstSpec = firstSpec;
        this.secondSpec = secondSpec;
    }

    isSatisfiedBy(candidate) {
        return this.firstSpec.isSatisfiedBy(candidate) || this.secondSpec.isSatisfiedBy(candidate);
    }
}