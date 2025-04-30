import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import ConsultationForm from "./ConsultationForm";

interface ConsultationModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function ConsultationModal({
	isOpen,
	onClose,
}: ConsultationModalProps) {
	return (
		<Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
			<DialogContent className="sm:max-w-[500px]">
				<DialogHeader>
					<DialogTitle className="text-2xl font-bold text-gray-800">
						Book Your Free Consultation
					</DialogTitle>
					<DialogDescription className="text-gray-600">
						Fill out the form below and we&apos;ll get back to you to schedule
						your session.
					</DialogDescription>
				</DialogHeader>
				<ConsultationForm onClose={onClose} />
			</DialogContent>
		</Dialog>
	);
}
