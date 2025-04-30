import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface ConsultationFormProps {
	onClose: () => void;
}

export default function ConsultationForm({ onClose }: ConsultationFormProps) {
	const { toast } = useToast();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			// In a real implementation, this would be connected to an email service
			// For now, we'll just simulate sending the email
			console.log("Sending consultation request:", formData);

			// Simulate API delay
			await new Promise((resolve) => setTimeout(resolve, 1500));

			toast({
				title: "Consultation Request Sent!",
				description:
					"We'll get back to you shortly to confirm your free consultation.",
			});

			onClose();
		} catch (error) {
			console.error("Error submitting form:", error);
			toast({
				title: "Something went wrong",
				description: "Please try again later.",
				variant: "destructive",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			<div className="space-y-2">
				<Label htmlFor="name">Full Name</Label>
				<Input
					id="name"
					name="name"
					placeholder="Enter your full name"
					value={formData.name}
					onChange={handleChange}
					required
					className="border-gray-300 focus:ring-blue-500 focus:border-blue-500"
				/>
			</div>

			<div className="space-y-2">
				<Label htmlFor="email">Email Address</Label>
				<Input
					id="email"
					name="email"
					type="email"
					placeholder="you@example.com"
					value={formData.email}
					onChange={handleChange}
					required
					className="border-gray-300 focus:ring-blue-500 focus:border-blue-500"
				/>
			</div>

			<div className="space-y-2">
				<Label htmlFor="phone">Phone Number</Label>
				<Input
					id="phone"
					name="phone"
					type="tel"
					placeholder="Your phone number"
					value={formData.phone}
					onChange={handleChange}
					className="border-gray-300 focus:ring-blue-500 focus:border-blue-500"
				/>
			</div>

			<div className="space-y-2">
				<Label htmlFor="message">Message (Optional)</Label>
				<Textarea
					id="message"
					name="message"
					placeholder="Tell us about your needs or questions..."
					value={formData.message}
					onChange={handleChange}
					className="border-gray-300 focus:ring-blue-500 focus:border-blue-500 min-h-[100px]"
				/>
			</div>

			<div className="flex gap-4 justify-end pt-4">
				<Button
					type="button"
					variant="outline"
					onClick={onClose}
					disabled={isSubmitting}
				>
					Cancel
				</Button>
				<Button
					type="submit"
					disabled={isSubmitting}
					className="bg-[#00C869] hover:bg-[#00b05e] text-white"
				>
					{isSubmitting ? "Submitting..." : "Book Consultation"}
				</Button>
			</div>
		</form>
	);
}
