import RadioBtns from "./RadioBtns"
import Checkboxes from "./Checkboxes"

export default function Form({ input, setInput, answers, setAnswers }) {
	function handleChange(e) {
		const { name, value } = e.target
		setInput({
			...input,
			[name]: value,
		})
	}

	function handleSubmit(e) {
		e.preventDefault()
		setAnswers([...answers, input])
		setInput({
			color: "",
			spendTime: [],
			review: "",
			username: "",
			email: "",
		})
	}
console.log('answ in form',answers);
	return (
		<div>
			<form className='form' onSubmit={handleSubmit}>
				<h2>Tell us what you think about your rubber duck!</h2>
				<div className='form__group radio'>
					<h3>How do you rate your rubber duck colour?</h3>
					<RadioBtns input={input} setInput={setInput} />
				</div>
				<div className='form__group'>
					<h3>How do you like to spend time with your rubber duck</h3>
					<Checkboxes input={input} setInput={setInput} />
				</div>
				<label>
					What else have you got to say about your rubber duck?
					<textarea
						name='review'
						cols='30'
						rows='10'
						value={input.review}
						onChange={handleChange}
					></textarea>
				</label>
				<label>
					Put your name here (if you feel like it):
					<input
						type='text'
						name='username'
						value={input.username}
						onChange={handleChange}
					/>
				</label>
				<label>
					Leave us your email pretty please??
					<input
						type='email'
						name='email'
						value={input.email}
						onChange={handleChange}
					/>
				</label>
				<input className='form__submit' type='submit' value='Submit Survey!' />
			</form>
		</div>
	)
}
