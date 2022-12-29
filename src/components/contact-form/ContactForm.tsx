import { useState } from 'preact/hooks'
import { SubmitButton } from './SubmitButton'

export const ContactForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)
  const [submitLoading, setSubmitLoading] = useState(false)

  if (firstName && email && subject && message) {
    setIsDisabled(false)
  } else {
    setIsDisabled(true)
  }

  return (
    <form
      name='contact'
      id='contact'
      class='flex flex-col gap-2 flex-grow flex-wrap p-4 items-center md:w-[50vw] w-full mx-auto child:w-full'
      action='/success'
      method='POST'
    >
      <input class='hidden' name='form-name' value='contact' />
      <div class='flex w-full gap-2 child:flex-grow'>
        <div class='child:w-full'>
          <label for='firstName'>
            <em>First Name*</em>
          </label>
          <input
            id='firstName'
            name='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.currentTarget.value)}
            required
          />
        </div>
        <div class='child:w-full'>
          <label for='lastName'>
            <em>Last Name</em>
          </label>
          <input
            id='lastName'
            name='lastName'
            value={lastName}
            onChange={(e) => setlastName(e.currentTarget.value)}
          />
        </div>
      </div>

      <label for='email'>
        <em>Email Address*</em>
      </label>
      <input
        id='email'
        name='email'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        required
      />

      <label for='subject'>
        <em>Subject*</em>
      </label>
      <input
        id='subject'
        name='subject'
        required
        value={subject}
        onChange={(e) => setSubject(e.currentTarget.value)}
      />

      <label for='message'>
        <em>Message*</em>
      </label>
      <textarea
        id='message'
        rows={4}
        class='text-neutral-900 p-1'
        name='message'
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
        required
      ></textarea>

      <SubmitButton isDisabled={isDisabled} submitLoading={submitLoading} />
    </form>
  )
}
