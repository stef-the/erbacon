// src/routes/products/mobile-equipment/+page.server.ts
import type { ServiceDataItem } from '$lib/Services/ServiceData';

export async function load() {
	const items: ServiceDataItem[] = [
		{
			name: 'Mechanic Trucks',
			description:
				'Stellar Industries mechanic trucks feature durable service bodies with customizable configurations for field maintenance and repair operations.',
			imageurl: '/truck-equipment/mobile-equipment-gallery/service-truck-1.jpg',
			imagealt: 'Stellar Industries mechanic truck',
			brand: 'Stellar Industries',
			pdf: '/truck-equipment/stellar/stellar-mechanic-trucks.pdf'
		},
		{
			name: 'Hook Lifts',
			description:
				'Versatile hook lift systems for quick and efficient container handling. Ideal for waste management, construction, and industrial applications.',
			imageurl: '/truck-equipment/mobile-equipment-gallery/hooklift-truck-1.jpg',
			imagealt: 'Stellar Industries hook lift truck',
			brand: 'Stellar Industries',
			pdf: '/truck-equipment/stellar/stellar-hook-lifts.pdf'
		},
		{
			name: 'Tool Boxes',
			description:
				'Heavy-duty truck tool boxes engineered for secure, organized storage of tools and equipment on the job site.',
			imageurl: '',
			imagealt: 'Stellar Industries tool boxes',
			brand: 'Stellar Industries',
			pdf: '/truck-equipment/stellar/stellar-tool-boxes.pdf'
		},
		{
			name: 'Fuel and Lube Trailers',
			description:
				'Mobile fuel and lube trailers designed to keep your fleet running efficiently with on-site fueling and lubrication services.',
			imageurl: '',
			imagealt: 'Stellar Industries fuel and lube trailer',
			brand: 'Stellar Industries',
			pdf: '/truck-equipment/stellar/stellar-fuel-and-lube-trailers.pdf'
		},
		{
			name: 'Waste Management',
			description:
				'Specialized waste management equipment for efficient collection, transport, and disposal of waste materials.',
			imageurl: '',
			imagealt: 'Stellar Industries waste management equipment',
			brand: 'Stellar Industries',
			pdf: '/truck-equipment/stellar/stellar-waste-management.pdf'
		},
		{
			name: 'Utility Trailers',
			description:
				'Rugged utility trailers built for hauling equipment, materials, and tools to and from the job site.',
			imageurl: '',
			imagealt: 'Stellar Industries utility trailer',
			brand: 'Stellar Industries',
			pdf: '/truck-equipment/stellar/stellar-utility-trailers.pdf'
		}
	];

	return {
		items,
		categoryInfo: {
			title: 'Mobile Equipment',
			description: 'Stellar Industries mobile equipment available through Edward R. Bacon Company.',
			contactCta: 'Contact us for pricing and availability',
			showPrices: false
		}
	};
}
