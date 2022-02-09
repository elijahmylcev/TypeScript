// Вспомогательная сущность, для однотипных элементов (например для именованных констант)

enum Membership {
	Simple,
	Standard,
	Premium,
}

const membership = Membership.Standard;
const membershipReverse = Membership[2];

console.log(membership);
console.log(membershipReverse);

enum SocialMedia {
	VK = 'VK',
	FACEBOOK = 'Facebook',
	INSTAGRAM = 'instagram',
}

const social = SocialMedia.INSTAGRAM;
console.log(social);
