import CardDiagram from "@/components/shared/Cards";
import ComparisonTable from "@/components/shared/Comparison_Table";
import ContactUsFooter from "@/components/shared/Contact_Us";
import Experience from "@/components/shared/Experience";
import Home_Landing from "@/components/shared/Home_Landing";
import OurApproaches from "@/components/shared/OurApproaches";
import SuccessStoryCarousel from "@/components/shared/Success_Stories";
import Why_Us from "@/components/shared/Why_Us";

export default function Home() {
	return (
		<>
			<Home_Landing />
			<Experience />
			<Why_Us />
			<OurApproaches />
			<ComparisonTable />
			<CardDiagram />
			<SuccessStoryCarousel />
			<ContactUsFooter />
		</>
	);
}
