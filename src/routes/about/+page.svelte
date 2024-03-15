<script>
	import { onMount } from 'svelte';
	let images = [
		// Add your image URLs here
		'https://hoopshype.com/wp-content/uploads/sites/92/2020/07/luka-doncic-draft.jpg?resize=1024,743',
		'https://hoopshype.com/wp-content/uploads/sites/92/2020/07/donovan-mitchell-draft.jpg?resize=1024,773',
		'https://hoopshype.com/wp-content/uploads/sites/92/2020/07/kobe-bryant-draft.jpg?resize=1024,968'
	];
	let currentImage = 0;

	function nextImage() {
		currentImage = (currentImage + 1) % images.length;
	}

	function prevImage() {
		currentImage = (currentImage - 1 + images.length) % images.length;
	}

	onMount(() => {
		// Preload next image for faster transition
		const nextImageUrl = images[(currentImage + 1) % images.length];
		const image = new Image();
		image.src = nextImageUrl;
	});
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="carousel">
	<button style="color:black" on:click={prevImage}>&lt;</button>
	<img src={images[currentImage]} alt="Image description" />
	<button style="color:black" on:click={nextImage}>&gt;</button>
</div>
<div class="text-column">
	<h1>About Real Draft</h1>

	<p>
		POV: You're trying to talk hoops with your friends or trying to win an argument online, you go
		to search through your team's draft history and it's full of guys who never suited up for you,
		meanwhile your star rookie is on some other team's draft list. Real Draft does not use AI but
		stll puts together a draft record that makes a little more sense. Only goes back to 1980, if
		anyone really cares we'll add the older drafts. We also added our own opinions for the drafts
		and might cook up some other stuff later.
	</p>
</div>

<style>
	.carousel {
		display: flex;
		overflow: hidden;
		position: relative;
	}

	.carousel img {
		width: 100%;
		height: auto;
		max-height: 500px;
		object-fit: contain;
	}

	.carousel button {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background-color: transparent;
		border: none;
		color: white;
		font-size: 2rem;
		cursor: pointer;
		padding: 10px;
	}

	.carousel button:first-child {
		left: 0;
	}

	.carousel button:last-child {
		right: 0;
	}
</style>
