import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BadgeCheck, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const VIDEO_TESTIMONIALS = [
	{
		id: 'john-doe',
		name: 'John Doe',
		role: 'Software Developer',
		poster: 'https://api.builder.io/api/v1/image/assets/TEMP/a77397c295184399f470f5c20c1336c40e3bc887?width=788',
		videoUrl: 'https://cdn.pixabay.com/video/2020/10/07/52761-465233990_large.mp4',
		gradient: 'linear-gradient(to bottom right, #EFF5FF, white)',
		overlay: 'linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,107,184,0.35), rgba(0,31,54,0.35))',
		accent: '#0A8DDE',
	},
	{
		id: 'maya-patel',
		name: 'Maya Patel',
		role: 'Product Founder',
		poster: 'https://api.builder.io/api/v1/image/assets/TEMP/df9404ccccba48ef30788e404f5856b510d078d7?width=788',
		videoUrl: 'https://cdn.pixabay.com/video/2021/11/30/100232-652569346_large.mp4',
		gradient: 'linear-gradient(to bottom right, #EFF5FF, white)',
		overlay: 'linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,72,255,0.35), rgba(2,16,43,0.35))',
		accent: '#256AF9',
	},
	{
		id: 'li-wei',
		name: 'Li Wei',
		role: 'Startup Founder',
		poster: 'https://api.builder.io/api/v1/image/assets/TEMP/0fa7d32437e0ed69d76394a6093c1a35d7e30bb2?width=788',
		videoUrl: 'https://cdn.pixabay.com/video/2023/05/15/162755-825705215_large.mp4',
		gradient: 'linear-gradient(to bottom right, #EFF5FF, white)',
		overlay: 'linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.35))',
		accent: '#0B5CC7',
	},
];

const TEXT_TESTIMONIALS = [
	{
		id: 'sarah-johnson-1',
		name: 'Sarah Johnson',
		role: 'Software Developer',
		quote: "Launchpad Labs turned our idea into a working MVP in record time. Couldn't have asked for a smoother process.",
		rating: 5,
	},
	{
		id: 'david-cho',
		name: 'David Cho',
		role: 'Founder, Atlas AI',
		quote: "Their team anticipated edge cases we hadn't even considered. The result shipped on schedule and exceeded expectations.",
		rating: 5,
	},
	{
		id: 'amelia-ross',
		name: 'Amelia Ross',
		role: 'Head of Product',
		quote: 'Super communicative, incredibly fast, and pixel perfect. We were demo-ready a week ahead of investor meetings.',
		rating: 5,
	},
	{
		id: 'noah-sousa',
		name: 'Noah Sousa',
		role: 'CTO, Breezy',
		quote: 'Code quality was top-notch. The handoff to our in-house team was effortless thanks to their clean documentation.',
		rating: 5,
	},
	{
		id: 'lena-moritz',
		name: 'Lena Moritz',
		role: 'Startup Advisor',
		quote: 'From first call to launch, the experience felt like an extension of our own team. They truly care about the outcome.',
		rating: 5,
	},
	{
		id: 'omar-hassan',
		name: 'Omar Hassan',
		role: 'Entrepreneur',
		quote: 'We iterated through multiple prototypes rapidly. Their structured process kept everything transparent and stress-free.',
		rating: 5,
	},
];

const STACK_POSITIONS = [
	{ scale: 1, x: 0, y: 0, opacity: 1, zIndex: 30 },
	{ scale: 0.92, x: 36, y: 34, opacity: 0.85, zIndex: 20 },
	{ scale: 0.88, x: 72, y: 68, opacity: 0.65, zIndex: 10 },
];

const AUTO_ROTATE_INTERVAL = 6500;

function SectionBadge({ label }) {
	return (
		<span style={{
			display: 'inline-flex',
			alignItems: 'center',
			gap: '12px',
			borderRadius: '9999px',
			border: '1px solid #CEE3FF',
			backgroundColor: 'white',
			padding: '8px 20px',
			fontSize: '14px',
			fontWeight: '500',
			color: '#1F1F1F',
			boxShadow: '0 10px 30px rgba(32, 94, 204, 0.12)'
		}}>
			<span style={{ position: 'relative', display: 'flex', height: '16px', width: '16px', alignItems: 'center', justifyContent: 'center' }}>
				<span style={{ position: 'absolute', height: '16px', width: '16px', borderRadius: '9999px', backgroundColor: 'rgba(7, 100, 218, 0.2)' }} />
				<span style={{ position: 'absolute', height: '12px', width: '12px', borderRadius: '9999px', backgroundColor: 'rgba(7, 100, 218, 0.35)' }} />
				<span style={{ position: 'relative', height: '8px', width: '8px', borderRadius: '9999px', backgroundColor: '#0764DA' }} />
			</span>
			{label}
		</span>
	);
}

function MarqueeTestimonialCard({ testimonial }) {
	return (
		<div style={{
			display: 'flex',
			width: '100%',
			flexDirection: 'column',
			gap: '16px',
			borderRadius: '18px',
			border: '1px dashed #ACD8FF',
			backgroundColor: 'rgba(255, 255, 255, 0.95)',
			padding: '16px',
			boxShadow: '0 16px 30px rgba(0, 68, 181, 0.14)',
			transition: 'transform 0.3s ease',
			marginBottom: '24px'
		}}
		onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
		onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
		>
			<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
				<div style={{
					display: 'flex',
					height: '42px',
					width: '42px',
					flexShrink: 0,
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: '9999px',
					background: 'linear-gradient(to bottom right, #F0F4FF, #D9E8FF)',
					fontSize: '14px',
					fontWeight: '600',
					color: '#256AF9'
				}}>
					{testimonial.name.split(' ').map((part) => part[0]).join('')}
				</div>
				<div style={{ flex: 1 }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
						<span style={{ fontSize: '15px', fontWeight: '600', color: 'black' }}>{testimonial.name}</span>
						<BadgeCheck style={{ height: '16px', width: '16px', color: '#00B0FB' }} />
					</div>
					<p style={{ fontSize: '13px', color: '#777' }}>{testimonial.role}</p>
				</div>
			</div>
			<p style={{ fontSize: '14px', lineHeight: '28px', color: '#1B1B1B', fontStyle: 'italic' }}>
				"{testimonial.quote}"
			</p>
			<div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
				{Array.from({ length: testimonial.rating }).map((_, starIndex) => (
					<Star key={starIndex} style={{ height: '20px', width: '20px', fill: '#FF9500', color: '#FF9500' }} />
				))}
			</div>
		</div>
	);
}

function VideoCard({ testimonial, isActive, onSelect }) {
	return (
		<div
			style={{
				borderRadius: '22px',
				backgroundColor: 'white',
				padding: '12px',
				boxShadow: '0 18px 45px rgba(0, 37, 116, 0.12)',
				transition: 'all 0.3s ease',
				opacity: isActive ? 1 : 0.9,
				outline: isActive ? '2px solid rgba(10, 141, 222, 0.5)' : 'none',
				cursor: 'pointer'
			}}
			onClick={onSelect}
		>
			<div style={{
				position: 'relative',
				height: '360px',
				width: '100%',
				overflow: 'hidden',
				borderRadius: '16px',
				background: testimonial.gradient
			}}>
				<img
					src={testimonial.poster}
					alt={`${testimonial.name} sharing their experience`}
					style={{
						position: 'absolute',
						inset: 0,
						height: '100%',
						width: '100%',
						objectFit: 'cover'
					}}
					loading='lazy'
				/>
				<div style={{
					position: 'absolute',
					inset: 0,
					background: testimonial.overlay
				}} />
				<div style={{
					position: 'absolute',
					bottom: '24px',
					left: '24px'
				}}>
					<div style={{
						marginBottom: '4px',
						display: 'flex',
						alignItems: 'center',
						gap: '8px',
						color: 'white'
					}}>
						<span style={{ fontSize: '16px', fontWeight: '600' }}>{testimonial.name}</span>
						<BadgeCheck style={{ height: '20px', width: '20px', color: '#00B0FB' }} />
					</div>
					<p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)' }}>{testimonial.role}</p>
				</div>
			</div>
		</div>
	);
}

function CarouselControl({ direction, onClick }) {
	const Icon = direction === 'prev' ? ChevronLeft : ChevronRight;
	return (
		<button
			style={{
				display: 'flex',
				height: '48px',
				width: '48px',
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: '9999px',
				border: '1px solid #D5E5FF',
				backgroundColor: 'white',
				color: '#256AF9',
				boxShadow: '0 8px 18px rgba(18, 79, 193, 0.15)',
				transition: 'transform 0.3s ease',
				cursor: 'pointer'
			}}
			onClick={onClick}
			onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
			onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
			aria-label={direction === 'prev' ? 'Previous' : 'Next'}
		>
			<Icon style={{ height: '24px', width: '24px' }} />
		</button>
	);
}

function VideoCarousel() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);

	useEffect(() => {
		if (isPaused) return;
		
		const timer = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % VIDEO_TESTIMONIALS.length);
		}, AUTO_ROTATE_INTERVAL);

		return () => clearInterval(timer);
	}, [isPaused]);

	const handleSelect = (nextIndex) => {
		setActiveIndex(nextIndex);
		setIsPaused(true);
		setTimeout(() => setIsPaused(false), AUTO_ROTATE_INTERVAL * 1.2);
	};

	return (
		<div>
			{/* Desktop Stack View */}
			<div style={{
				position: 'relative',
				display: 'none',
				height: '430px',
				width: '100%',
				maxWidth: '420px'
			}}
			className="desktop-carousel">
				{VIDEO_TESTIMONIALS.map((testimonial, index) => {
					const position = (index - activeIndex + VIDEO_TESTIMONIALS.length) % VIDEO_TESTIMONIALS.length;
					const variant = STACK_POSITIONS[position] ?? STACK_POSITIONS[STACK_POSITIONS.length - 1];

					return (
						<motion.div
							key={testimonial.id}
							style={{
								position: 'absolute',
								inset: 0,
								zIndex: variant.zIndex
							}}
							animate={{
								scale: variant.scale,
								opacity: variant.opacity,
								x: variant.x,
								y: variant.y,
							}}
							transition={{ type: 'spring', stiffness: 120, damping: 18 }}
							onMouseEnter={() => setIsPaused(true)}
							onMouseLeave={() => setIsPaused(false)}
						>
							<VideoCard
								testimonial={testimonial}
								isActive={position === 0}
								onSelect={() => handleSelect(index)}
							/>
						</motion.div>
					);
				})}
				<div style={{
					position: 'absolute',
					zIndex: 30,
					bottom: '-24px',
					left: '50%',
					display: 'flex',
					transform: 'translateX(-50%)',
					alignItems: 'center',
					gap: '8px'
				}}>
					{VIDEO_TESTIMONIALS.map((testimonial, index) => (
						<button
							key={testimonial.id}
							style={{
								height: '14px',
								width: '14px',
								borderRadius: '9999px',
								transition: 'all 0.3s ease',
								backgroundColor: index === activeIndex ? '#0A8DDE' : '#C9E5FF',
								cursor: 'pointer',
								border: 'none'
							}}
							onClick={() => handleSelect(index)}
							aria-label={`Show testimonial ${index + 1}`}
						/>
					))}
				</div>
			</div>

			{/* Mobile Carousel */}
			<div style={{
				position: 'relative',
				display: 'flex',
				flexDirection: 'column',
				gap: '24px'
			}}
			className="mobile-carousel">
				<div style={{ overflow: 'hidden', borderRadius: '22px' }}>
					<AnimatePresence mode='wait'>
						<motion.div
							key={VIDEO_TESTIMONIALS[activeIndex].id}
							initial={{ opacity: 0, x: 40 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -40 }}
							transition={{ type: 'spring', stiffness: 150, damping: 20 }}
						>
							<VideoCard
								testimonial={VIDEO_TESTIMONIALS[activeIndex]}
								isActive={true}
								onSelect={() => handleSelect(activeIndex)}
							/>
						</motion.div>
					</AnimatePresence>
				</div>
				<div style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: '16px'
				}}>
					<CarouselControl
						direction='prev'
						onClick={() =>
							handleSelect((activeIndex - 1 + VIDEO_TESTIMONIALS.length) % VIDEO_TESTIMONIALS.length)
						}
					/>
					<CarouselControl
						direction='next'
						onClick={() => handleSelect((activeIndex + 1) % VIDEO_TESTIMONIALS.length)}
					/>
				</div>
			</div>
			
			<style>{`
				@media (min-width: 1024px) {
					.desktop-carousel { display: flex !important; }
					.mobile-carousel { display: none !important; }
				}
			`}</style>
		</div>
	);
}

function VideoTestimonialsSection() {
	const [key, setKey] = useState(0);
	
	useEffect(() => {
		// Force re-render to restart animations
		const timer = setTimeout(() => setKey(prev => prev + 1), 100);
		return () => clearTimeout(timer);
	}, []);

	return (
		<section style={{
			position: 'relative',
			margin: '0 auto',
			maxWidth: '1280px',
			padding: '64px 16px'
		}}>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<SectionBadge label='Testimonials' />
			</div>

			<div style={{
				marginTop: '48px',
				display: 'flex',
				flexDirection: 'column',
				gap: '48px'
			}}
			className="testimonials-content">
				{/* Marquee Columns */}
				<div style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(2, 1fr)',
					gap: '24px',
					flex: 1
				}}>
					{/* Column 1 - Scroll Down */}
					<div style={{
						overflow: 'hidden',
						height: '520px',
						position: 'relative'
					}}>
						<div style={{
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							height: '80px',
							background: 'linear-gradient(to bottom, white, transparent)',
							zIndex: 10
						}} />
						<div style={{
							position: 'absolute',
							bottom: 0,
							left: 0,
							right: 0,
							height: '80px',
							background: 'linear-gradient(to top, white, transparent)',
							zIndex: 10
						}} />
						<div key={`col1-${key}`} style={{
							animation: 'scroll 20s linear infinite',
							transform: 'translateY(0)',
							position: 'relative'
						}}>
							{TEXT_TESTIMONIALS.map((testimonial, i) => (
								<MarqueeTestimonialCard key={i} testimonial={testimonial} />
							))}
						</div>
					</div>

					{/* Column 2 - Scroll Up */}
					<div style={{
						overflow: 'hidden',
						height: '520px',
						position: 'relative'
					}}>
						<div style={{
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							height: '80px',
							background: 'linear-gradient(to bottom, white, transparent)',
							zIndex: 10
						}} />
						<div style={{
							position: 'absolute',
							bottom: 0,
							left: 0,
							right: 0,
							height: '80px',
							background: 'linear-gradient(to top, white, transparent)',
							zIndex: 10
						}} />
						<div key={`col2-${key}`} style={{
							animation: 'scroll-reverse 25s linear infinite',
							transform: 'translateY(-100%)',
							position: 'relative'
						}}>
							{TEXT_TESTIMONIALS.map((testimonial, i) => (
								<MarqueeTestimonialCard key={i} testimonial={testimonial} />
							))}
						</div>
					</div>
				</div>

				{/* Video Carousel Section */}
				<div style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '40px',
					width: '100%'
				}}
				className="video-section">
					<h1 style={{
						fontSize: '24px',
						fontWeight: '600',
						lineHeight: '1.4',
						color: '#202020',
						textAlign: 'center'
					}}>
						Real feedback from founders who turned their ideas into reality with us
					</h1>
					<VideoCarousel />
				</div>
			</div>

			<style>{`
				@keyframes scroll {
					0% { transform: translateY(0); }
					100% { transform: translateY(-100%); }
				}
				
				@keyframes scroll-reverse {
					0% { transform: translateY(-100%); }
					100% { transform: translateY(0); }
				}

				@media (min-width: 1024px) {
					.testimonials-content {
						flex-direction: row-reverse !important;
						gap: 64px !important;
					}
					.video-section {
						width: 420px !important;
					}
					.video-section h1 {
						font-size: 32px !important;
						text-align: left !important;
					}
				}

				@media (min-width: 640px) {
					section {
						padding: 64px 24px !important;
					}
				}

				@media (min-width: 1024px) {
					section {
						padding: 96px 24px !important;
					}
				}
			`}</style>
		</section>
	);
}

export default function App() {
	return (
		<div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
			<VideoTestimonialsSection />
		</div>
	);
}