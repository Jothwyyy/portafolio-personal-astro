export const contactPage = {
	header: {
		icon: 'solid fa-envelope',
		title: 'Get In Touch',
		description: 'Use the form below to give /dev/null a piece of your mind.',
	},
	form: {
		fields: [
			{
				name: 'name',
				type: 'text',
				placeholder: 'Name',
				wrapperClass: 'col-6 col-12-mobile',
			},
			{
				name: 'email',
				type: 'text',
				placeholder: 'Email',
				wrapperClass: 'col-6 col-12-mobile',
			},
			{
				name: 'subject',
				type: 'text',
				placeholder: 'Subject',
				wrapperClass: 'col-12',
			},
		],
		message: {
			name: 'message',
			placeholder: 'Message',
			rows: 7,
			wrapperClass: 'col-12',
		},
		submit: {
			label: 'Send Message',
			wrapperClass: 'col-12',
		},
	},
};
