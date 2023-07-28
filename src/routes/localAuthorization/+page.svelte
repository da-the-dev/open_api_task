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

	const auth = getAuth(app);
</script>

<svelte:head>
	<title>Local Firebase Authorization</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>There will be an Firebase authorization</h1>

	
</div>
