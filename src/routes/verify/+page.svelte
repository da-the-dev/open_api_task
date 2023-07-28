<script lang="ts">
    import {page} from '$app/stores'
    import vk from '$lib/shared/stores/vk';

    const params = new URLSearchParams($page.url.hash.slice(1))
    const access_token = params.get('access_token')!
    const expires_in = parseInt(params.get('expires_in')!)
    const user_id = parseInt(params.get('user_id')!)

    vk.set({
        access_token: access_token,
        expires_in: expires_in,
        user_id: user_id
    })

</script>

<div><a href="/">Return</a></div>