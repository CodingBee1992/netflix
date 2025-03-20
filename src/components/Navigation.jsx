import React, { useState } from 'react'
import logo from '../assets/logo.png'
import search_icon from '../assets/search_icon.svg'
import bell_icon from '../assets/bell_icon.svg'
import profile_icon from '../assets/profile_img.png'
import caret_icon from '../assets/caret_icon.svg'

const Navigation = () => {
	const [open, setOpen] = useState(false)

	return (
		<div className="flex justify-between p-8 w-full fixed top-0 text-[#e5e5e5] bg-linear-[180deg,rgba(0,0,0,1)20%,transparent] z-100">
			<div className="flex items-center gap-4">
				<img src={logo} alt="" className="w-[70px]" />
				<ul className="flex gap-4 text-[14px] ">
					<li>Home</li>
					<li>TV Shows</li>
					<li>Movies</li>
					<li>New & Popular</li>
					<li>My List</li>
					<li>Browse by Languages</li>
				</ul>
			</div>
			<div className="flex items-center gap-4">
				<img src={search_icon} alt="" className="pointer" />
				<p>Children</p>
				<img src={bell_icon} alt="" className="pointer" />
				<div className="relative flex gap-2">
					<img src={profile_icon} alt="" className="pointer w-[25px] rounded-[4px]" />
					<img src={caret_icon} alt="" className="pointer" onClick={() => setOpen(!open)} />

					{open && (
						<div className="absolute flex flex-col gap-3 top-10 right-0 p-5 w-max text-center rounded-2xl bg-[#191919] shadow-[0px_0px_5px_#e3e3e3]">
							<p className='dropdown'>Sign Out of Netflix</p>
							<p className='dropdown'>Sign Out of Netflix</p>
							<p className='dropdown'>Sign Out of Netflix</p>
							<p className='dropdown'>Sign Out of Netflix</p>
							<p className='dropdown'>Sign Out of Netflix</p>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Navigation
