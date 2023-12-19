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
		ProjectName: { en: "PLAGETTE", ar: "تلال الغاف" },
		HeaderTitle: {
			en: "Ultra Luxury Villa at PLAGETTE",
			ar: "فلل فاخرة جدا من تلال الغاف",
		},
		HeaderTitleTow: {
			en: "Greenary",
			ar: "فلل فاخرة جدا من تلال الغاف",
		},
		HeaderImage: projectOneHeader,
		InfoTitle: {
			en: " Vibrant Lagoon-side Community",
			ar: "فلل فاخرة جدا من تلال الغاف",
		},
		InfoSubTitle: {
			en: "Welcome to our vibrant lagoon-side community, a blend of nature and convenience. With over 500,000 SQ. M of green parks and open spaces, life here is a breath of fresh air. Explore 18 kilometers of walking trails and 11 kilometers of cycling and jogging paths, all set in lush landscapes. Experience convenience and leisure with top-notch dining, exclusive retail options, and a renowned international school, all just a short stroll away in our welcoming neighborhood.",
			ar: "استمتع بإطلالات بانورامية على بحيرة الغاف البكر بينما تنغمس في أسلوب حياة فاخر حقًا",
		},
		InfoData: [
			{
				Icon: coinIcon,
				Title: { en: "AED7.8M", ar: "AED7.8M" },
				SubTitle: { en: "Starting Price", ar: "بأسعار تبدأ من" },
			},
			{
				Icon: locationIcon,
				Title: { en: "Hessa Street", ar: "شارع حصة" },
				SubTitle: { en: "Location", ar: "الموقع" },
			},
			{
				Icon: percentage,
				Title: { en: "20%", ar: "20%" },
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
			en: "A Masterplan of Natual Living In ACRES",
			ar: "نص عربي للمشروع الثاني أي شي",
		},
		HeaderImage: projectTwoHeader,
		InfoTitle: {
			en: "Discover a community unlike any other in Dubai",
			ar: "عنوان المشروع الثاني",
		},
		InfoSubTitle: {
			en: "Welcome to The Acres, a beautiful new community with stand-alone villas surrounded by nature. Enjoy peaceful gardens and clear blue lagoons in a neighborhood that fits perfectly with the gentle hills. Our pathways connect you to every part of this lush and growing area. At The Acres, the beauty of the outdoors is just a step away, blending comfort with the simplicity of nature",
			ar: "شرح مبسط عن المشروع الثاني ",
		},
		InfoData: [
			{
				Icon: coinIcon,
				Title: { en: "AED5.09M", ar: "AED5.09" },
				SubTitle: { en: "Starting Price", ar: "بأسعار تبدأ من" },
			},
			{
				Icon: locationIcon,
				Title: { en: "Dubailand", ar: "دبي لاند" },
				SubTitle: { en: "Location", ar: "الموقع" },
			},
			{
				Icon: percentage,
				Title: { en: "10%", ar: "10%" },
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
