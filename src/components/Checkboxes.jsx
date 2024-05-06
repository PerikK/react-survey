export default function Checkboxes({ input, setInput }) {
	function handleChange(e) {
		const { name, value } = e.target
		setInput({ ...input, [name]: [...input.spendTime, value] })
	}

	return (
		<ul>
			<li>
				<label>
					<input name='spendTime' type='checkbox' value='swimming' onChange={handleChange} checked={input.spendTime.includes('swimming')} />
					Swimming
				</label>
			</li>
			<li>
				<label>
                    <input name='spendTime' type='checkbox' value='bathing' onChange={handleChange} checked={input.spendTime.includes('bathing')} />
					Bathing
				</label>
			</li>
			<li>
				<label>
                    <input name='spendTime' type='checkbox' value='chatting' onChange={handleChange} checked={input.spendTime.includes('chatting')} />
					Chatting
				</label>
			</li>
			<li>
				<label>
                    <input name='spendTime' type='checkbox' value='noTime' onChange={handleChange} checked={input.spendTime.includes('noTime')} />I do not like
					to spend time with it
				</label>
			</li>
		</ul>
	)
}
