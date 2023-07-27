export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export interface ComplexImage {
	image: Image,
	details?: string,
	description?: string,
	clickthroughUrl?: string,
}

export interface C_specialty {
	name?: string,
}

export interface Address {
	line1?: string,
	line2?: string,
	line3?: string,
	sublocality?: string,
	city?: string,
	region?: string,
	postalCode?: string,
	extraDescription?: string,
	countryCode?: string,
}

export interface Coordinate {
	latitude?: number,
	longitude?: number,
}

export interface C_locationsPracticingAt {
	address?: Address,
	geocodedCoordinate?: Coordinate,
}

export interface educationList {
	institutionName?: string,
	yearCompleted?: number,
}

export interface C_faqs {
	question?: string,
	answer?: string,
}

export default interface Doctors {
	name: string,
	slug: string,
	npi: string,
	description: string,
	headshot: Image,
	insuranceAccepted: string[],
	educationList: educationList[],
	certifications: string[],
	healthcare_practiceNames: string[],
	languages: string[],
	gender: string,
	healthcare_specialty: string,
	healthcare_locationsPracticingAt: C_locationsPracticingAt[],
	healthcare_fAQs: C_faqs[],
}
