import projectOneHeader from "../assets/images/main.webp";

import projectTwoHeader from "../assets/images/acres.webp";
import locationIcon from "../assets/icons/location-icon.svg";
import percentage from "../assets/icons/down-payment.svg";
import coinIcon from "../assets/icons/coin.svg";
import DubaiVideo from "../assets/videos/dubai.mp4";
//Nearby Images
import dxb from "../assets/images/nearby/dxb.webp";
import downtown from "../assets/images/nearby/downtown.webp";
import marina from "../assets/images/nearby/marina.webp";
import moe from "../assets/images/nearby/moe.webp";
import dwc from "../assets/images/nearby/dwc.webp";
import jumeirah from "../assets/images/nearby/jumeirah.webp";
export const projectsData = [
	{
		id: 1,
		ProjectName: { en: "Tilal Al Ghaf", ar: "تلال الغاف" },
		HeaderTitle: {
			en: "Ultra Luxury Villa at Tillal Al Ghaf",
			ar: "فلل فاخرة جدا من تلال الغاف",
		},
		HeaderImage: projectOneHeader,
		InfoTitle: {
			en: "Ultra Luxury Villa at Tillal Al Ghaf",
			ar: "فلل فاخرة جدا من تلال الغاف",
		},
		InfoSubTitle: {
			en: "Enjoy panoramic views of the pristine Lagoon AL Ghaf as you indulge in a truly luxurious lifestyle",
			ar: "استمتع بإطلالات بانورامية على بحيرة الغاف البكر بينما تنغمس في أسلوب حياة فاخر حقًا",
		},
		InfoData: [
			{
				Icon: coinIcon,
				Title: { en: "AED24.6M", ar: "AED24.6M" },
				SubTitle: { en: "Starting Price", ar: "بأسعار تبدأ من" },
			},
			{
				Icon: locationIcon,
				Title: { en: "Hessa Street", ar: "شارع حصة" },
				SubTitle: { en: "Location", ar: "الموقع" },
			},
			{
				Icon: percentage,
				Title: { en: "20", ar: "20" },
				SubTitle: { en: "Downpayment", ar: "دفعة مقدمة" },
			},
		],
		Nearby: [
			{
				Duration: "24",
				Place: { en: "Palm Jumeirah ", ar: "" },
				Image: jumeirah,
			},
			{
				Duration: "24",
				Place: { en: "Dubai Marina", ar: "" },
				Image: marina,
			},
			{
				Duration: "20",
				Place: { en: "DWC Airport", ar: "" },
				Image: dwc,
			},
			{
				Duration: "30",
				Place: { en: "DXB Airport", ar: "" },
				Image: dxb,
			},
			{
				Duration: "21",
				Place: { en: "Dubai Downtown", ar: "" },
				Image: downtown,
			},
			{
				Duration: "20",
				Place: { en: "Mall of Emirates", ar: "" },
				Image: moe,
			},
		],
		Video: DubaiVideo,
	},
	{
		id: 2,
		ProjectName: { en: "Acres", ar: "Acres" },
		HeaderTitle: {
			en: "The Acres, every step inside brings you closer to the outdoors.",
			ar: "نص عربي للمشروع الثاني أي شي",
		},
		HeaderImage: projectTwoHeader,
		InfoTitle: { en: "Acres Project Main Title", ar: "عنوان المشروع الثاني" },
		InfoSubTitle: {
			en: "Acres Project Description",
			ar: "شرح مبسط عن المشروع الثاني ",
		},
		InfoData: [
			{
				Icon: coinIcon,
				Title: { en: "AED24.6M", ar: "AED24.6M" },
				SubTitle: { en: "Starting Price", ar: "بأسعار تبدأ من" },
			},
			{
				Icon: locationIcon,
				Title: { en: "Hessa Street", ar: "شارع حصة" },
				SubTitle: { en: "Location", ar: "الموقع" },
			},
			{
				Icon: percentage,
				Title: { en: "20", ar: "20" },
				SubTitle: { en: "Downpayment", ar: "دفعة مقدمة" },
			},
		],
		Nearby: [
			{
				Duration: "24",
				Place: { en: "Palm Jumeirah ", ar: "" },
				Image: jumeirah,
			},
			{
				Duration: "24",
				Place: { en: "Dubai Marina", ar: "" },
				Image: marina,
			},
			{
				Duration: "20",
				Place: { en: "DWC Airport", ar: "" },
				Image: dwc,
			},
			{
				Duration: "30",
				Place: { en: "DXB Airport", ar: "" },
				Image: dxb,
			},
			{
				Duration: "21",
				Place: { en: "Dubai Downtown", ar: "" },
				Image: downtown,
			},
			{
				Duration: "20",
				Place: { en: "Mall of Emirates", ar: "" },
				Image: moe,
			},
		],
		Video: DubaiVideo,
	},
];
