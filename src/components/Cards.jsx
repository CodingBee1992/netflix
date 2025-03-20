import { useEffect, useRef } from 'react'
import cards_data from '../cards/Cards_data'


const Cards = () => {
	const cardsRef = useRef()

	const handleWheel = (e)=>{
		e.preventDefault();
		cardsRef.current.scrollLeft += e.deltaY
	}

	useEffect(()=>{
		cardsRef.current.addEventListener('wheel',handleWheel)
	},[])



	return (
		<div className="mt-10 mb-5">
			<h2 className="mb-4 text-2xl">Popular on Netflix:</h2>
			<div className="flex gap-3 overflow-x-scroll webkit" ref={cardsRef}>
				{cards_data.map((card, index) => (
					<div key={index} className="relative min-w-[240px]">
						<img src={card.image} alt="" className="cursor-pointer w-[240px] rounded-2xl" />
						<p className="absolute bottom-1 left-1 text-lime-300">{card.name}</p>
					</div>
				))}
				
				
			
			</div>
		</div>
	)
}

export default Cards
