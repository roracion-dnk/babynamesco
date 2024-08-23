<template>
    <div id="page-wrapper">
      <h1>User List</h1>
      <ul>
        <li v-for="user in users" :key="user.id">
          <strong>{{ user.username }}</strong> - {{ user.email }}
          <br>
          <em>Main Details:</em>
          <ul v-if="user.main_details">
            <li v-for="detail in user.main_details" :key="detail.id">
              {{ detail.info }} <!-- Replace 'info' with the actual column name -->
            </li>
          </ul>
          <p v-else>No details available</p>
        </li>
      </ul>

      <!-- Form to Add New Main Details -->
      <div>
        <h2>Add New Details</h2>
        <form @submit.prevent="submitForm">
          <label for="user_id">Select User:</label>
          <select v-model="newDetail.user_id" id="user_id" required>
            <option v-for="user in users" :key="user.id" :value="user.id">
              {{ user.username }} ({{ user.email }})
            </option>
          </select>
          
          <label for="info">Detail Info:</label>
          <input type="text" v-model="newDetail.info" id="info" required />

          <button type="submit">Add Details</button>
        </form>
      </div>

    </div>
  </template>
  
<script setup>
  import { ref, onMounted } from 'vue';
  import {useSupabaseClient} from '#imports';

  const supabase = useSupabaseClient();

  const users = ref([]);
  const newDetail = ref({
    user_id: '',
    info: ''
  });

  async function fetchUsers() {

    // let { data, error } = await supabase.from('users').select('*');

    let { data, error } = await supabase
    .from('users')
    .select(`
      id,
      username,
      email,
      main_details (
        user_id,
        info
      )
    `);

    if (error) {
        console.error('Error fetching users:', error.message);
    } else {
        users.value = data;
    }
  }

  async function submitForm() {
    const { user_id, info } = newDetail.value;

    // Call the PostgreSQL function
    const { error } = await supabase.rpc('add_main_detail', {
      p_user_id: user_id,
      p_info: info
    });

    if (error) {
      console.error('Error adding new detail:', error.message);
    } else {
      // Clear the form or update the UI as needed
      newDetail.value = { user_id: '', info: '' };
      await fetchUsers();
    }
  }

  onMounted(() => {
      fetchUsers();
  });
</script>
  