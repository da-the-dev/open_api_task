<script>
	import Vk from '$lib/icons/vk.svelte'

	// Import the functions you need from the SDKs you need
	import { initializeApp } from "firebase/app";
	import { getAuth } from "firebase/auth";
	// TODO: Add SDKs for Firebase products that you want to use
	// https://firebase.google.com/docs/web/setup#available-libraries

	// Your web app's Firebase configuration
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
	const firebaseConfig = {
	apiKey: "AIzaSyDh7419NhN6hfdI9XAxFSHHzB_mRPp-6K4",
	authDomain: "openapi-91af8.firebaseapp.com",
	projectId: "openapi-91af8",
	storageBucket: "openapi-91af8.appspot.com",
	messagingSenderId: "237915812369",
	appId: "1:237915812369:web:327998c34e5b8dcedeb7b0",
	measurementId: "G-G2M7TQ3BG8"
	};

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		You can authorize via VK
	</h1>
	<div class="auth-b">
		<button class="vk-auth-button">
			<Vk/>
		</button>
	</div>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.vk-auth-button {
		width : 4rem;
		height: 4rem;
		border: none;
		border-radius: 10px;
		background-color: var(--color-bg-2);
	}

</style>
