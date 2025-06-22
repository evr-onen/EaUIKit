<template>
  <div class="demo-container">
    <!-- Header -->
    <div class="demo-header">
      <h1 class="demo-title">EaTextInput Component</h1>
      <p class="demo-description">
        A versatile and feature-rich text input component with validation, icons,
        and multiple interaction states.
      </p>
    </div>

    <!-- Basic Examples -->
    <section class="demo-section">
      <h2 class="section-title">Basic Usage</h2>
      <div class="example-grid">
        <div class="example-item">
          <h3>Default Input</h3>
          <EaTextInput
            v-model="basicExample"
            label="Username"
            placeholder="Enter your username"
          />
          <p class="example-value">Value: {{ basicExample }}</p>
        </div>

        <div class="example-item">
          <h3>With Helper Text</h3>
          <EaTextInput
            v-model="helperExample"
            label="Email"
            placeholder="Enter your email"
            helper-text="We'll never share your email with anyone."
            type="email"
          />
        </div>

        <div class="example-item">
          <h3>Required Field</h3>
          <EaTextInput
            v-model="requiredExample"
            label="Full Name"
            placeholder="Enter your full name"
            required
          />
        </div>
      </div>

      <div class="code-example">
        <h4>Code Example:</h4>
        <pre><code>&lt;EaTextInput
  v-model="inputValue"
  label="Username"
  placeholder="Enter your username"
  helper-text="Choose a unique username"
  required
/&gt;</code></pre>
      </div>
    </section>

    <!-- Sizes -->
    <section class="demo-section">
      <h2 class="section-title">Sizes</h2>
      <div class="example-grid">
        <div class="example-item">
          <h3>Small</h3>
          <EaTextInput
            v-model="sizeSmall"
            label="Small Input"
            placeholder="Small size"
            size="sm"
          />
        </div>

        <div class="example-item">
          <h3>Medium (Default)</h3>
          <EaTextInput
            v-model="sizeMedium"
            label="Medium Input"
            placeholder="Medium size"
            size="md"
          />
        </div>

        <div class="example-item">
          <h3>Large</h3>
          <EaTextInput
            v-model="sizeLarge"
            label="Large Input"
            placeholder="Large size"
            size="lg"
          />
        </div>
      </div>

      <div class="code-example">
        <h4>Code Example:</h4>
        <pre><code>&lt;EaTextInput size="sm" /&gt;
&lt;EaTextInput size="md" /&gt; &lt;!-- Default --&gt;
&lt;EaTextInput size="lg" /&gt;</code></pre>
      </div>
    </section>

    <!-- Input Types -->
    <section class="demo-section">
      <h2 class="section-title">Input Types</h2>
      <div class="example-grid">
        <div class="example-item">
          <h3>Password</h3>
          <EaTextInput
            v-model="passwordExample"
            label="Password"
            placeholder="Enter password"
            type="password"
          />
        </div>

        <div class="example-item">
          <h3>Email</h3>
          <EaTextInput
            v-model="emailExample"
            label="Email"
            placeholder="Enter email"
            type="email"
          />
        </div>

        <div class="example-item">
          <h3>Number</h3>
          <EaTextInput
            v-model="numberExample"
            label="Age"
            placeholder="Enter age"
            type="number"
          />
        </div>

        <div class="example-item">
          <h3>Search</h3>
          <EaTextInput
            v-model="searchExample"
            label="Search"
            placeholder="Search products..."
            type="search"
            prefix-icon="bars"
            clearable
          />
        </div>
      </div>

      <div class="code-example">
        <h4>Code Example:</h4>
        <pre><code>&lt;EaTextInput type="password" /&gt;
&lt;EaTextInput type="email" /&gt;
&lt;EaTextInput type="number" /&gt;
&lt;EaTextInput type="search" /&gt;</code></pre>
      </div>
    </section>

    <!-- States -->
    <section class="demo-section">
      <h2 class="section-title">States</h2>
      <div class="example-grid">
        <div class="example-item">
          <h3>Disabled</h3>
          <EaTextInput
            v-model="disabledExample"
            label="Disabled Input"
            placeholder="This is disabled"
            disabled
          />
        </div>

        <div class="example-item">
          <h3>Readonly</h3>
          <EaTextInput
            v-model="readonlyExample"
            label="Readonly Input"
            placeholder="This is readonly"
            readonly
          />
        </div>

        <div class="example-item">
          <h3>Loading</h3>
          <EaTextInput
            v-model="loadingExample"
            label="Loading Input"
            placeholder="Loading..."
            loading
          />
        </div>

        <div class="example-item">
          <h3>Error State</h3>
          <EaTextInput
            v-model="errorExample"
            label="Email"
            placeholder="Enter email"
            is-invalid
            error-message="Please enter a valid email address"
            type="email"
          />
        </div>
      </div>

      <div class="code-example">
        <h4>Code Example:</h4>
        <pre><code>&lt;EaTextInput disabled /&gt;
&lt;EaTextInput readonly /&gt;
&lt;EaTextInput loading /&gt;
&lt;EaTextInput
  is-invalid
  error-message="Invalid input"
/&gt;</code></pre>
      </div>
    </section>

    <!-- Icons -->
    <section class="demo-section">
      <h2 class="section-title">With Icons</h2>
      <div class="example-grid">
        <div class="example-item">
          <h3>Prefix Icon</h3>
          <EaTextInput
            v-model="prefixExample"
            label="Search"
            placeholder="Search..."
            prefix-icon="bars"
          />
        </div>

        <div class="example-item">
          <h3>Suffix Icon</h3>
          <EaTextInput
            v-model="suffixExample"
            label="Location"
            placeholder="Enter location"
            suffix-icon="settings"
          />
        </div>

        <div class="example-item">
          <h3>Both Icons</h3>
          <EaTextInput
            v-model="bothIconsExample"
            label="Username"
            placeholder="Enter username"
            prefix-icon="dashboard"
            suffix-icon="check"
          />
        </div>
      </div>

      <div class="code-example">
                <h4>Code Example:</h4>
        <pre><code>&lt;EaTextInput prefix-icon="bars" /&gt;
&lt;EaTextInput suffix-icon="settings" /&gt;
&lt;EaTextInput
  prefix-icon="dashboard"
  suffix-icon="check"
/&gt;</code></pre>
      </div>
    </section>

    <!-- Advanced Features -->
    <section class="demo-section">
      <h2 class="section-title">Advanced Features</h2>
      <div class="example-grid">
        <div class="example-item">
          <h3>Clearable</h3>
          <EaTextInput
            v-model="clearableExample"
            label="Clearable Input"
            placeholder="Type something..."
            clearable
          />
        </div>

        <div class="example-item">
          <h3>Character Counter</h3>
          <EaTextInput
            v-model="counterExample"
            label="Bio"
            placeholder="Tell us about yourself"
            :maxlength="100"
            show-counter
          />
        </div>

        <div class="example-item">
          <h3>Debounced Input</h3>
          <EaTextInput
            v-model="debounceExample"
            label="Search (Debounced)"
            placeholder="Search with delay..."
            :debounce="500"
            prefix-icon="bars"
          />
          <p class="example-value">Debounced Value: {{ debounceExample }}</p>
        </div>

        <div class="example-item">
          <h3>Custom Validation</h3>
          <EaTextInput
            v-model="validationExample"
            label="Custom Validation"
            placeholder="Type 'hello'"
            :is-invalid="validationExample && validationExample !== 'hello'"
            :error-message="validationExample && validationExample !== 'hello' ? 'Must type hello' : ''"
            helper-text="Type 'hello' to see validation"
          />
        </div>
      </div>

      <div class="code-example">
        <h4>Custom Validation Code Example:</h4>
        <pre><code>&lt;EaTextInput
  v-model="validationExample"
  label="Custom Validation"
  placeholder="Type 'hello'"
  :is-invalid="validationExample && validationExample !== 'hello'"
  :error-message="validationExample && validationExample !== 'hello' ? 'Must type hello' : ''"
  helper-text="Type 'hello' to see validation"
/&gt;</code></pre>
      </div>
    </section>

    <!-- Advanced Custom Validation -->
    <section class="demo-section">
      <h2 class="section-title">Advanced Custom Validation Examples</h2>
      <div class="example-grid">
        <div class="example-item">
          <h3>Email Validation</h3>
          <EaTextInput
            v-model="emailValidation"
            label="Email Address"
            placeholder="Enter your email"
            type="email"
            :is-invalid="emailValidation && !isValidEmail(emailValidation)"
            :error-message="emailValidation && !isValidEmail(emailValidation) ? 'Please enter a valid email address' : ''"
            helper-text="Must be a valid email format"
          />
        </div>

        <div class="example-item">
          <h3>Password Strength</h3>
          <EaTextInput
            v-model="passwordValidation"
            label="Strong Password"
            placeholder="Enter a strong password"
            type="password"
            :is-invalid="passwordValidation && !isStrongPassword(passwordValidation)"
            :error-message="getPasswordError(passwordValidation)"
            helper-text="Must be 8+ chars with uppercase, lowercase, number and special char"
            :maxlength="50"
            show-counter
          />
        </div>

        <div class="example-item">
          <h3>Phone Number</h3>
          <EaTextInput
            v-model="phoneValidation"
            label="Phone Number"
            placeholder="(555) 123-4567"
            :is-invalid="phoneValidation && !isValidPhone(phoneValidation)"
            :error-message="phoneValidation && !isValidPhone(phoneValidation) ? 'Please enter a valid phone number' : ''"
            helper-text="Format: (555) 123-4567"
            @input="formatPhoneNumber"
          />
        </div>

        <div class="example-item">
          <h3>Username Availability</h3>
          <EaTextInput
            v-model="usernameValidation"
            label="Username"
            placeholder="Enter username"
            :is-invalid="usernameValidation && !isUsernameAvailable(usernameValidation)"
            :error-message="getUsernameError(usernameValidation)"
            helper-text="3-20 chars, letters and numbers only"
            :loading="checkingUsername"
            @input="checkUsernameAvailability"
          />
        </div>
      </div>

      <div class="code-example">
        <h4>Advanced Validation Code Examples:</h4>
        <pre><code>// Email Validation
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Password Strength
const isStrongPassword = (password: string): boolean => {
  const minLength = password.length >= 8
  const hasUpper = /[A-Z]/.test(password)
  const hasLower = /[a-z]/.test(password)
  const hasNumber = /\d/.test(password)
  const hasSpecial = /[!@#$%^&*(),.?":{}|&lt;&gt;]/.test(password)
  return minLength && hasUpper && hasLower && hasNumber && hasSpecial
}

// Phone Number Formatting
const formatPhoneNumber = () => {
  let value = phoneValidation.value.replace(/\D/g, '')
  if (value.length >= 6) {
    value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`
  } else if (value.length >= 3) {
    value = `(${value.slice(0, 3)}) ${value.slice(3)}`
  }
  phoneValidation.value = value
}

// Username Availability Check
const checkUsernameAvailability = debounce(() => {
  if (usernameValidation.value.length >= 3) {
    checkingUsername.value = true
    // Simulate API call
    setTimeout(() => {
      checkingUsername.value = false
    }, 1000)
  }
}, 500)</code></pre>
      </div>
    </section>

    <!-- Advanced Features -->
    <section class="demo-section">
      <h2 class="section-title">Advanced Features</h2>

      <div class="code-example">
        <h4>Code Example:</h4>
        <pre><code>&lt;EaTextInput
  clearable
  :maxlength="100"
  show-counter
  :debounce="500"
/&gt;</code></pre>
      </div>
    </section>

    <!-- Event Handling -->
    <section class="demo-section">
      <h2 class="section-title">Event Handling</h2>
      <div class="example-item">
        <h3>All Events</h3>
        <EaTextInput
          v-model="eventExample"
          label="Event Example"
          placeholder="Type to see events"
          @input="onInput"
          @change="onChange"
          @focus="onFocus"
          @blur="onBlur"
          @clear="onClear"
          @keydown="onKeydown"
        />
        <div class="event-log">
          <h4>Event Log:</h4>
          <ul>
            <li v-for="(event, index) in eventLog" :key="index">
              {{ event }}
            </li>
          </ul>
        </div>
      </div>

      <div class="code-example">
        <h4>Code Example:</h4>
        <pre><code>&lt;EaTextInput
  v-model="value"
  @input="onInput"
  @change="onChange"
  @focus="onFocus"
  @blur="onBlur"
  @clear="onClear"
  @keydown="onKeydown"
  @keyup="onKeyup"
/&gt;</code></pre>
      </div>
    </section>

    <!-- Props Table -->
    <section class="demo-section">
      <h2 class="section-title">Props Documentation</h2>
      <div class="props-table-container">
        <table class="props-table">
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>modelValue</td>
              <td>string | number</td>
              <td>''</td>
              <td>The input value (v-model)</td>
            </tr>
            <tr>
              <td>label</td>
              <td>string</td>
              <td>undefined</td>
              <td>Label text displayed above input</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>string</td>
              <td>'Enter text...'</td>
              <td>Placeholder text</td>
            </tr>
            <tr>
              <td>size</td>
              <td>'sm' | 'md' | 'lg'</td>
              <td>'md'</td>
              <td>Input size</td>
            </tr>
            <tr>
              <td>type</td>
              <td>'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search'</td>
              <td>'text'</td>
              <td>Input type</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>boolean</td>
              <td>false</td>
              <td>Disable the input</td>
            </tr>
            <tr>
              <td>readonly</td>
              <td>boolean</td>
              <td>false</td>
              <td>Make input readonly</td>
            </tr>
            <tr>
              <td>required</td>
              <td>boolean</td>
              <td>false</td>
              <td>Mark field as required</td>
            </tr>
            <tr>
              <td>loading</td>
              <td>boolean</td>
              <td>false</td>
              <td>Show loading state</td>
            </tr>
            <tr>
              <td>isInvalid</td>
              <td>boolean</td>
              <td>false</td>
              <td>Mark input as invalid</td>
            </tr>
            <tr>
              <td>errorMessage</td>
              <td>string</td>
              <td>undefined</td>
              <td>Error message to display</td>
            </tr>
            <tr>
              <td>helperText</td>
              <td>string</td>
              <td>undefined</td>
              <td>Helper text to display</td>
            </tr>
            <tr>
              <td>prefixIcon</td>
              <td>string</td>
              <td>''</td>
              <td>Icon name for prefix</td>
            </tr>
            <tr>
              <td>suffixIcon</td>
              <td>string</td>
              <td>''</td>
              <td>Icon name for suffix</td>
            </tr>
            <tr>
              <td>clearable</td>
              <td>boolean</td>
              <td>false</td>
              <td>Show clear button when has value</td>
            </tr>
            <tr>
              <td>showCounter</td>
              <td>boolean</td>
              <td>false</td>
              <td>Show character counter</td>
            </tr>
            <tr>
              <td>maxlength</td>
              <td>number</td>
              <td>undefined</td>
              <td>Maximum character length</td>
            </tr>
            <tr>
              <td>minlength</td>
              <td>number</td>
              <td>undefined</td>
              <td>Minimum character length</td>
            </tr>
            <tr>
              <td>debounce</td>
              <td>number</td>
              <td>0</td>
              <td>Debounce delay in milliseconds</td>
            </tr>
            <tr>
              <td>autocomplete</td>
              <td>string</td>
              <td>undefined</td>
              <td>HTML autocomplete attribute</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Events Table -->
    <section class="demo-section">
      <h2 class="section-title">Events Documentation</h2>
      <div class="props-table-container">
        <table class="props-table">
          <thead>
            <tr>
              <th>Event</th>
              <th>Payload</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>input</td>
              <td>Event</td>
              <td>Native input event</td>
            </tr>
            <tr>
              <td>change</td>
              <td>Event</td>
              <td>Native change event</td>
            </tr>
            <tr>
              <td>focus</td>
              <td>FocusEvent</td>
              <td>When input receives focus</td>
            </tr>
            <tr>
              <td>blur</td>
              <td>FocusEvent</td>
              <td>When input loses focus</td>
            </tr>
            <tr>
              <td>clear</td>
              <td>void</td>
              <td>When clear button is clicked</td>
            </tr>
            <tr>
              <td>keydown</td>
              <td>KeyboardEvent</td>
              <td>Native keydown event</td>
            </tr>
            <tr>
              <td>keyup</td>
              <td>KeyboardEvent</td>
              <td>Native keyup event</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Methods Table -->
    <section class="demo-section">
      <h2 class="section-title">Exposed Methods</h2>
      <div class="props-table-container">
        <table class="props-table">
          <thead>
            <tr>
              <th>Method</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>focus()</td>
              <td>Focus the input element</td>
            </tr>
            <tr>
              <td>blur()</td>
              <td>Blur the input element</td>
            </tr>
            <tr>
              <td>select()</td>
              <td>Select all text in the input</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EaTextInput from '@/components/ui/form/EaTextInput/index.vue';

// Basic examples
const basicExample = ref('');
const helperExample = ref('');
const requiredExample = ref('');

// Size examples
const sizeSmall = ref('');
const sizeMedium = ref('');
const sizeLarge = ref('');

// Type examples
const passwordExample = ref('');
const emailExample = ref('');
const numberExample = ref('');
const searchExample = ref('');

// State examples
const disabledExample = ref('Disabled value');
const readonlyExample = ref('Readonly value');
const loadingExample = ref('');
const errorExample = ref('invalid-email');

// Icon examples
const prefixExample = ref('');
const suffixExample = ref('');
const bothIconsExample = ref('');

// Advanced feature examples
const clearableExample = ref('Clear me!');
const counterExample = ref('');
const debounceExample = ref('');
const validationExample = ref('');

// Advanced validation examples
const emailValidation = ref('');
const passwordValidation = ref('');
const phoneValidation = ref('');
const usernameValidation = ref('');
const checkingUsername = ref(false);

// Event example
const eventExample = ref('');
const eventLog = ref<string[]>([]);

const addEvent = (eventName: string, detail?: any) => {
  const timestamp = new Date().toLocaleTimeString();
  const message = detail
    ? `${timestamp} - ${eventName}: ${JSON.stringify(detail)}`
    : `${timestamp} - ${eventName}`;
  eventLog.value.unshift(message);

  // Keep only last 10 events
  if (eventLog.value.length > 10) {
    eventLog.value = eventLog.value.slice(0, 10);
  }
};

const onInput = (event: Event) => {
  addEvent('input', (event.target as HTMLInputElement).value);
};

const onChange = (event: Event) => {
  addEvent('change', (event.target as HTMLInputElement).value);
};

const onFocus = (event: FocusEvent) => {
  addEvent('focus');
};

const onBlur = (event: FocusEvent) => {
  addEvent('blur');
};

const onClear = () => {
  addEvent('clear');
};

const onKeydown = (event: KeyboardEvent) => {
  addEvent('keydown', event.key);
};

// Advanced Validation Functions
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isStrongPassword = (password: string): boolean => {
  if (!password) return false;
  const minLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  return minLength && hasUpper && hasLower && hasNumber && hasSpecial;
};

const getPasswordError = (password: string): string => {
  if (!password) return '';

  const errors = [];
  if (password.length < 8) errors.push('at least 8 characters');
  if (!/[A-Z]/.test(password)) errors.push('uppercase letter');
  if (!/[a-z]/.test(password)) errors.push('lowercase letter');
  if (!/\d/.test(password)) errors.push('number');
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) errors.push('special character');

  return errors.length > 0 ? `Password must contain ${errors.join(', ')}` : '';
};

const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
  return phoneRegex.test(phone);
};

const formatPhoneNumber = () => {
  let value = phoneValidation.value.replace(/\D/g, '');
  if (value.length >= 6) {
    value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
  } else if (value.length >= 3) {
    value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
  }
  phoneValidation.value = value;
};

const isUsernameAvailable = (username: string): boolean => {
  if (!username) return true;
  if (username.length < 3 || username.length > 20) return false;
  if (!/^[a-zA-Z0-9]+$/.test(username)) return false;
  // Simulate some usernames being taken
  const takenUsernames = ['admin', 'user', 'test', 'demo', 'root'];
  return !takenUsernames.includes(username.toLowerCase());
};

const getUsernameError = (username: string): string => {
  if (!username) return '';
  if (username.length < 3) return 'Username must be at least 3 characters';
  if (username.length > 20) return 'Username must be less than 20 characters';
  if (!/^[a-zA-Z0-9]+$/.test(username)) return 'Username can only contain letters and numbers';
  if (!isUsernameAvailable(username)) return 'Username is already taken';
  return '';
};

const debounce = (func: Function, delay: number) => {
  let timeoutId: number;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

const checkUsernameAvailability = debounce(() => {
  if (usernameValidation.value.length >= 3) {
    checkingUsername.value = true;
    // Simulate API call
    setTimeout(() => {
      checkingUsername.value = false;
    }, 1000);
  }
}, 500);
</script>

<style scoped lang="scss">
.demo-container {
  @apply max-w-6xl mx-auto p-6 space-y-12;
}

.demo-header {
  @apply text-center mb-12;
}

.demo-title {
  @apply text-4xl font-bold text-gray-900 mb-4;
}

.demo-description {
  @apply text-lg text-gray-600 max-w-2xl mx-auto;
}

.demo-section {
  @apply space-y-6;
}

.section-title {
  @apply text-2xl font-semibold text-gray-800 mb-6;
}

.example-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;
}

.example-item {
  @apply space-y-3;

  h3 {
    @apply text-lg font-medium text-gray-700;
  }
}

.example-value {
  @apply text-sm text-gray-500 bg-gray-50 p-2 rounded;
}

.code-example {
  @apply mt-8 bg-gray-900 text-gray-100 p-4 rounded-lg;

  h4 {
    @apply text-white font-medium mb-3;
  }

  pre {
    @apply text-sm overflow-x-auto;

    code {
      @apply text-green-400;
    }
  }
}

.event-log {
  @apply mt-4 bg-gray-50 p-4 rounded-lg;

  h4 {
    @apply font-medium text-gray-700 mb-2;
  }

  ul {
    @apply space-y-1 max-h-48 overflow-y-auto;

    li {
      @apply text-sm text-gray-600 font-mono;
    }
  }
}

.props-table-container {
  @apply overflow-x-auto bg-white rounded-lg shadow;
}

.props-table {
  @apply w-full border-collapse;

  th {
    @apply bg-gray-50 text-left p-4 font-semibold text-gray-900 border-b;
  }

  td {
    @apply p-4 border-b text-gray-700;

    &:first-child {
      @apply font-mono text-blue-600;
    }

    &:nth-child(2) {
      @apply font-mono text-purple-600 text-sm;
    }

    &:nth-child(3) {
      @apply font-mono text-orange-600 text-sm;
    }
  }

  tr:hover {
    @apply bg-gray-50;
  }
}
</style>
