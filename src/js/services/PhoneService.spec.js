import * as PhoneService from './PhoneService';

describe('PhoneService unit tests', () => {

    let phoneService;

    beforeAll(() => {
        phoneService = new PhoneService.PhoneService();
        phoneService.setPhones(getPhones());
    });

    test('getAllPremiumPhones test', () => {
        const phones = phoneService.getAllPremiumPhones();
        expect(phones).toBeDefined();
        expect(phones.length).toEqual(13);
    });

    test('getSamsungPhones test', () => {
        const phones = phoneService.getSamsungPhones();
        expect(phones).toBeDefined();
        expect(phones.length).toEqual(8);
    });

    test('getPremiumSamsungPhones test', () => {
        const phones = phoneService.getPremiumSamsungPhones();
        expect(phones).toBeDefined();
        expect(phones.length).toEqual(3);
    });

    test('getSamsungAndHTCPhones test', () => {
        const phones = phoneService.getSamsungAndHTCPhones();
        expect(phones).toBeDefined();
        expect(phones.length).toEqual(13);
    });

    test('getPremiumSamsungAndHTCPhones test', () => {
        const phones = phoneService.getPremiumSamsungAndHTCPhones();
        expect(phones).toBeDefined();
        expect(phones.length).toEqual(4);
    });

    test('getAllExceptSamsungPhones test', () => {
        const phones = phoneService.getAllExceptSamsungPhones();
        expect(phones).toBeDefined();
        expect(phones.length).toEqual(54);
    });

    test('getAllPremiumExceptSamsungAndHTCPhones test', () => {
        const phones = phoneService.getAllPremiumExceptSamsungAndHTCPhones();
        expect(phones).toBeDefined();
        expect(phones.length).toEqual(9);
    });

    const getPhones = () => [
            {
                "_id": "5a6e0b8961f7720dcced794b",
                "version": 2,
                "type": "BASIC",
                "brand": "GOOGLE",
                "cost": 433.2945
            },
            {
                "_id": "5a6e0b89654487a6f03d42e2",
                "version": 5,
                "type": "SMART",
                "brand": "HUAWEI",
                "cost": 231.5297
            },
            {
                "_id": "5a6e0b89d0b11a649ee512f0",
                "version": 1,
                "type": "BASIC",
                "brand": "ALCATEL",
                "cost": 494.2242
            },
            {
                "_id": "5a6e0b894e411965aa8cd7ee",
                "version": 4,
                "type": "BASIC",
                "brand": "ALCATEL",
                "cost": 455.8205
            },
            {
                "_id": "5a6e0b894a11819bdc7c332b",
                "version": 5,
                "type": "BASIC",
                "brand": "MOTOROLA",
                "cost": 798.366
            },
            {
                "_id": "5a6e0b89d39bfb7a5fc8e9f5",
                "version": 4,
                "type": "SMART",
                "brand": "ALCATEL",
                "cost": 793.5158
            },
            {
                "_id": "5a6e0b89f230120e2b7dc14e",
                "version": 4,
                "type": "BASIC",
                "brand": "MOTOROLA",
                "cost": 263.3162
            },
            {
                "_id": "5a6e0b89d370f82cd9d2d6dd",
                "version": 2,
                "type": "BASIC",
                "brand": "HUAWEI",
                "cost": 343.5556
            },
            {
                "_id": "5a6e0b8935204d4f68228367",
                "version": 5,
                "type": "BASIC",
                "brand": "HTC",
                "cost": 648.3215
            },
            {
                "_id": "5a6e0b89832483839de7cc5c",
                "version": 3,
                "type": "BASIC",
                "brand": "HUAWEI",
                "cost": 294.6556
            },
            {
                "_id": "5a6e0b8914179db44de744a8",
                "version": 2,
                "type": "BASIC",
                "brand": "GOOGLE",
                "cost": 895.1746
            },
            {
                "_id": "5a6e0b89731045d56267e9eb",
                "version": 1,
                "type": "SMART",
                "brand": "MOTOROLA",
                "cost": 866.774
            },
            {
                "_id": "5a6e0b8987d3032de4af3eef",
                "version": 3,
                "type": "SMART",
                "brand": "NOKIA",
                "cost": 365.8749
            },
            {
                "_id": "5a6e0b89fe9325eef5ea688b",
                "version": 3,
                "type": "BASIC",
                "brand": "NOKIA",
                "cost": 616.5081
            },
            {
                "_id": "5a6e0b8989213359a3b9f387",
                "version": 1,
                "type": "SMART",
                "brand": "NOKIA",
                "cost": 548.9085
            },
            {
                "_id": "5a6e0b8978467e6e37c1d1ca",
                "version": 3,
                "type": "BASIC",
                "brand": "HUAWEI",
                "cost": 297.8623
            },
            {
                "_id": "5a6e0b89144d039bff3f59f4",
                "version": 1,
                "type": "SMART",
                "brand": "HUAWEI",
                "cost": 461.7202
            },
            {
                "_id": "5a6e0b896c43ca87abb2d0cb",
                "version": 2,
                "type": "BASIC",
                "brand": "NOKIA",
                "cost": 464.5564
            },
            {
                "_id": "5a6e0b891c05b5eb0eb833cb",
                "version": 3,
                "type": "BASIC",
                "brand": "BLACKBERRY",
                "cost": 469.5922
            },
            {
                "_id": "5a6e0b89883b033c051211e5",
                "version": 5,
                "type": "BASIC",
                "brand": "MOTOROLA",
                "cost": 478.6938
            },
            {
                "_id": "5a6e0b89bce3a79d223330a0",
                "version": 1,
                "type": "SMART",
                "brand": "SAMSUNG",
                "cost": 550.583
            },
            {
                "_id": "5a6e0b89556450fcab62108d",
                "version": 1,
                "type": "SMART",
                "brand": "NOKIA",
                "cost": 820.6639
            },
            {
                "_id": "5a6e0b89b600ad83eafe0483",
                "version": 1,
                "type": "SMART",
                "brand": "MOTOROLA",
                "cost": 256.3664
            },
            {
                "_id": "5a6e0b8937dd7b1a5a079093",
                "version": 5,
                "type": "BASIC",
                "brand": "ALCATEL",
                "cost": 142.2012
            },
            {
                "_id": "5a6e0b8967656881e9c57426",
                "version": 4,
                "type": "BASIC",
                "brand": "BLACKBERRY",
                "cost": 620.3314
            },
            {
                "_id": "5a6e0b894a801dd72d224ad0",
                "version": 2,
                "type": "BASIC",
                "brand": "HTC",
                "cost": 849.5446
            },
            {
                "_id": "5a6e0b89310b9c01468d3826",
                "version": 3,
                "type": "SMART",
                "brand": "ALCATEL",
                "cost": 538.5387
            },
            {
                "_id": "5a6e0b896d540eb6e206f60f",
                "version": 4,
                "type": "BASIC",
                "brand": "MOTOROLA",
                "cost": 707.7693
            },
            {
                "_id": "5a6e0b89b9eccd419cbb9da6",
                "version": 3,
                "type": "SMART",
                "brand": "NOKIA",
                "cost": 814.5055
            },
            {
                "_id": "5a6e0b8932cf5f88b1fb4dbe",
                "version": 2,
                "type": "BASIC",
                "brand": "HUAWEI",
                "cost": 648.9744
            },
            {
                "_id": "5a6e0b89de142deb54557276",
                "version": 1,
                "type": "SMART",
                "brand": "SAMSUNG",
                "cost": 583.94
            },
            {
                "_id": "5a6e0b895570e06e2ea30022",
                "version": 2,
                "type": "SMART",
                "brand": "SAMSUNG",
                "cost": 396.928
            },
            {
                "_id": "5a6e0b899a4be9b2ebfa7b6e",
                "version": 4,
                "type": "BASIC",
                "brand": "HUAWEI",
                "cost": 48.9386
            },
            {
                "_id": "5a6e0b89c57af57dc8a08a7f",
                "version": 2,
                "type": "SMART",
                "brand": "HTC",
                "cost": 210.6729
            },
            {
                "_id": "5a6e0b8936c6bf443b9a8885",
                "version": 4,
                "type": "SMART",
                "brand": "GOOGLE",
                "cost": 32.5014
            },
            {
                "_id": "5a6e0b89eb9ae603f3802c7b",
                "version": 4,
                "type": "SMART",
                "brand": "NOKIA",
                "cost": 330.842
            },
            {
                "_id": "5a6e0b8958414eabfc70604f",
                "version": 5,
                "type": "BASIC",
                "brand": "SAMSUNG",
                "cost": 110.0758
            },
            {
                "_id": "5a6e0b89a8480b0e95df0783",
                "version": 5,
                "type": "BASIC",
                "brand": "SAMSUNG",
                "cost": 298.9126
            },
            {
                "_id": "5a6e0b89ec355c570eecfe33",
                "version": 3,
                "type": "BASIC",
                "brand": "SAMSUNG",
                "cost": 676.6958
            },
            {
                "_id": "5a6e0b890312e256db362005",
                "version": 1,
                "type": "BASIC",
                "brand": "MOTOROLA",
                "cost": 877.3712
            },
            {
                "_id": "5a6e0b89898d117b16a5d3f6",
                "version": 3,
                "type": "BASIC",
                "brand": "HUAWEI",
                "cost": 808.872
            },
            {
                "_id": "5a6e0b8988080b69211107f4",
                "version": 5,
                "type": "BASIC",
                "brand": "ALCATEL",
                "cost": 737.1853
            },
            {
                "_id": "5a6e0b89115ab0b47ed952e5",
                "version": 3,
                "type": "SMART",
                "brand": "BLACKBERRY",
                "cost": 327.2338
            },
            {
                "_id": "5a6e0b898eec58930edfa5cc",
                "version": 3,
                "type": "BASIC",
                "brand": "MOTOROLA",
                "cost": 575.3516
            },
            {
                "_id": "5a6e0b89ae21faeedd24315e",
                "version": 5,
                "type": "SMART",
                "brand": "HUAWEI",
                "cost": 207.0263
            },
            {
                "_id": "5a6e0b891b193e1c249da3cb",
                "version": 5,
                "type": "SMART",
                "brand": "NOKIA",
                "cost": 286.0335
            },
            {
                "_id": "5a6e0b896746a72ed12fced0",
                "version": 5,
                "type": "SMART",
                "brand": "SAMSUNG",
                "cost": 778.8107
            },
            {
                "_id": "5a6e0b89b2952e8c115fb23f",
                "version": 2,
                "type": "BASIC",
                "brand": "BLACKBERRY",
                "cost": 515.808
            },
            {
                "_id": "5a6e0b89f44c706201429a12",
                "version": 2,
                "type": "BASIC",
                "brand": "ALCATEL",
                "cost": 105.0959
            },
            {
                "_id": "5a6e0b89e64b16799e65cbf9",
                "version": 1,
                "type": "BASIC",
                "brand": "HTC",
                "cost": 106.1025
            },
            {
                "_id": "5a6e0b8909969cc4388ee2bf",
                "version": 5,
                "type": "SMART",
                "brand": "NOKIA",
                "cost": 269.4657
            },
            {
                "_id": "5a6e0b89b39147635d195c34",
                "version": 4,
                "type": "SMART",
                "brand": "HUAWEI",
                "cost": 621.3448
            },
            {
                "_id": "5a6e0b89394beccfec7b0dcd",
                "version": 4,
                "type": "SMART",
                "brand": "SAMSUNG",
                "cost": 284.3592
            },
            {
                "_id": "5a6e0b899be8b36433739ef1",
                "version": 4,
                "type": "BASIC",
                "brand": "GOOGLE",
                "cost": 423.792
            },
            {
                "_id": "5a6e0b8945adc24538b72547",
                "version": 4,
                "type": "SMART",
                "brand": "HUAWEI",
                "cost": 258.5858
            },
            {
                "_id": "5a6e0b89864a505f0c4385e8",
                "version": 2,
                "type": "BASIC",
                "brand": "BLACKBERRY",
                "cost": 52.5833
            },
            {
                "_id": "5a6e0b8978789b9f32e1b9f6",
                "version": 5,
                "type": "SMART",
                "brand": "ALCATEL",
                "cost": 882.8713
            },
            {
                "_id": "5a6e0b89fe0141e7d4bbcdf5",
                "version": 1,
                "type": "BASIC",
                "brand": "MOTOROLA",
                "cost": 644.4598
            },
            {
                "_id": "5a6e0b894cfe11fae15d426b",
                "version": 1,
                "type": "BASIC",
                "brand": "MOTOROLA",
                "cost": 717.98
            },
            {
                "_id": "5a6e0b89462f275f6c289cbe",
                "version": 4,
                "type": "SMART",
                "brand": "HTC",
                "cost": 550.5888
            },
            {
                "_id": "5a6e0b893f8761c603969263",
                "version": 3,
                "type": "SMART",
                "brand": "BLACKBERRY",
                "cost": 384.4297
            },
            {
                "_id": "5a6e0b8971472dfe7bbe16ea",
                "version": 4,
                "type": "BASIC",
                "brand": "NOKIA",
                "cost": 639.9065
            }
        ];
});