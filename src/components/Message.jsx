const Message = ({ message }) => {
	return (
		<p className="italic text-darkPurple mt-10 text-base sm:text-lg border-darkPurple border-2 rounded-md px-4 py-2 shadow-lg">
			{message}
		</p>
	);
};

export default Message;
