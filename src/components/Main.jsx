import { v4 as uuidv4 } from 'uuid'
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
	const [form, setForm] = useState({ site: "", username: "", password: "" })
	const [passwordsArray, setPasswordsArray] = useState([])
	const ref = useRef()
	const ShowPass = useRef()

	useEffect(() => {
		let passwords = localStorage.getItem("passwords")
		if (passwords) {
			setPasswordsArray(JSON.parse(passwords))
		}
	}, [])




	const savePassword = () => {
        if(form.site.length >3 && form.username.length >3 &&form.password.length >3){

            setPasswordsArray([...passwordsArray, {...form, id: uuidv4()}])
            localStorage.setItem("passwords", JSON.stringify([...passwordsArray, {...form, id: uuidv4()}]))
            setForm({ site: "", username: "", password: "" })
            toast('Password saved!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
    else{
        toast('Error: Password not saved!');
    }

    }


	const deletePassword = (id) => {
		let c = confirm("Do you really want to delete this password?")
		if (c) {
			setPasswordsArray(passwordsArray.filter(item => item.id !== id))
			localStorage.setItem("passwords", JSON.stringify(passwordsArray.filter(item => item.id !== id)))
		}

	}
	const editPassword = (id) => {
		setForm(passwordsArray.filter(i => i.id === id)[0])
		setPasswordsArray(passwordsArray.filter(item => item.id !== id))

	}




	const showpassowrd = (e) => {
		if (ShowPass.current.src.includes("icons/eyecross.png")) {
			ShowPass.current.src = "icons/eye.png"
			ref.current.type = "password"
		} else {
			ShowPass.current.src = "icons/eyecross.png"
			ref.current.type = "text"
		}
	}

	const copytext = (text) => {
		navigator.clipboard.writeText(text)
	}

	const handlechange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}


	return (
		<>
			{/* <div className="absolute inset-0 -z-10 h-full w-full 	"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div> */}
			<div className="lg:mx-auto lg:mycontainer mb-10 min-h-[84vh] px-3">
				<h1 className='text-3xl font-bold text-center'>
					<span className="text-green-500">&lt;</span>
					<span>Pass</span>
					<span className="text-green-500"> OP/&gt;</span>
				</h1>
				<p className='text-xl text-center text-green-600'>Your own password manager</p>
				<div className="text-white flex flex-col items-center p-4 gap-4">
					<input value={form.site} onChange={handlechange} type="text" name="site" id="site" className='outline-none border border-green-600 rounded-full px-4 py-[2px] w-full  text-black' placeholder='Enter Site URL' />
					<div className='flex flex-col lg:flex-row justify-between gap-2 w-full'>
						<input value={form.username} onChange={handlechange} type="text" name="username" id="useranme" className='outline-none border border-green-600 rounded-full  px-4 py-[2px] w-full text-black' placeholder='Username' />
						<div className="relative">
							<input value={form.password} onChange={handlechange} type="password" name="password" id="pass" className='outline-none border w-full border-green-600 rounded-full px-4 py-[2px]  text-black' placeholder='Password' ref={ref} />
							<span className="bg-transparent absolute top-[5px] right-2 text-black"><img ref={ShowPass} onClick={showpassowrd} src="icons/eye.png" width={26} alt="" /></span>
						</div>

					</div>
					<button className='text-black bg-green-500 border-2 border-green-900  flex justify-center w-fit items-center rounded-3xl px-6 py-1' onClick={savePassword}>
						<lord-icon
							src="https://cdn.lordicon.com/jgnvfzqg.json"
							trigger="hover"
							className='w-[250px] h-[250px]'>
						</lord-icon>
						<span className='font-bold' >Save</span>
					</button>
				</div>
				<div className="passwords">
					<h1 className='font-bold text-xl my-1'>
						Your Passwords
					</h1>
					{passwordsArray.length === 0 && <div>No passwords to show</div>}
					{
						passwordsArray.length !== 0 &&
						<table className="table-auto rounded-lg overflow-hidden w-full">
							<thead className='bg-green-800 text-white'>
								<tr>
									<th className='py-1'>Site</th>
									<th className='py-1'>UserName</th>
									<th className='py-1'>Password</th>
									<th className='py-1'>Actions</th>
								</tr>
							</thead>
							<tbody className='bg-green-100'>
								{passwordsArray.map((item, index) => (
									<tr key={index}>
										<td className=' text-center border border-white py-1'>
											<div className='text-xs lg:text-base break-all flex justify-center items-center'>
												{item.site}
												<div className='size-7 cursor-pointer lordiconcopy' onClick={() => { copytext(item.site) }}>
													<lord-icon
														src="https://cdn.lordicon.com/iykgtsbt.json"
														trigger="hover"
														style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }} >
													</lord-icon>
												</div>
											</div>
										</td>
										<td className='text-center border border-white py-1'>
											<div className='text-xs lg:text-base break-all flex justify-center items-center'>
												<span>{item.username}</span>
												<div className='size-7 cursor-pointer lordiconcopy' onClick={() => { copytext(item.username) }}>
													<lord-icon
														src="https://cdn.lordicon.com/iykgtsbt.json"
														trigger="hover"
														style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }} >
													</lord-icon>
												</div>
											</div>
										</td>
										<td className=' text-center border border-white py-1'>
											<div className='text-xs lg:text-base  break-all flex justify-center items-center'>
												<span>{item.password}</span>
												<div className='size-7 cursor-pointer lordiconcopy' onClick={() => { copytext(item.password) }}>
													<lord-icon
														src="https://cdn.lordicon.com/iykgtsbt.json"
														trigger="hover"
														style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }} >
													</lord-icon>
												</div>
											</div>
										</td>
										<td className=' text-center border border-white py-1'>
											<span className='mr-2' onClick={() => { editPassword(item.id) }}>
												<lord-icon
													src="https://cdn.lordicon.com/gwlusjdu.json"
													trigger='hover'
													style={{ "width": "25px", "height": "25px" }}>
												</lord-icon>
											</span>
											<span onClick={() => { deletePassword(item.id) }}>
												<lord-icon
													src="https://cdn.lordicon.com/skkahier.json"
													trigger="hover"
													style={{ "width": "25px", "height": "25px" }}>
												</lord-icon>
											</span>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					}
				</div>
			</div>
		</>
	)
}

export default Main
