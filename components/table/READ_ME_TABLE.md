# NetworkExperimentsTable Component

A standalone Vue 3 table component for displaying network experiments. This component is designed to be reusable across multiple websites including CoherenceStream, BentoBoxDS.org, and the BentoBoxDS toolkit.

## Features

- **Standalone**: Works with any Vue 3 application
- **Responsive**: Desktop table view and mobile card view
- **Copy functionality**: Click to copy NXP codes with visual feedback
- **Customizable theme**: Configurable colors via props
- **Zero dependencies**: Only requires Vue 3
- **Accessible**: Proper ARIA labels and semantic HTML

## Usage

### Basic Usage

```vue
<template>
  <NetworkExperimentsTable 
    :experiments="networkExperiments"
  />
</template>

<script setup>
import NetworkExperimentsTable from './components/NetworkExperimentsTable.vue'

const networkExperiments = [
  {
    network: 'healthCues',
    name: 'Body composition',
    experiment: 'changes over time',
    nxpCode: 'hop: coming soon 1',
    learnMoreUrl: 'https://coherencestream.com/networks',
    learnMoreText: 'coherencestream.com/networks' // optional
  },
  // ... more experiments
]
</script>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `experiments` | Array | Required | Array of experiment objects (see data structure below) |
| `title` | String | 'Network experiment boards' | Table title |
| `description` | String | '' | Optional description text below title |
| `theme` | Object | See below | Custom color theme |

### Data Structure

Each experiment object must have these properties:

```javascript
{
  network: String,        // Network name (e.g., 'healthCues')
  name: String,          // Experiment name (e.g., 'Body composition')
  experiment: String,    // Experiment description
  nxpCode: String,       // NXP code to be copied
  learnMoreUrl: String,  // URL for learn more link
  learnMoreText: String  // Optional display text for link (defaults to URL)
}
```

### Theme Customization

You can customize colors by passing a theme object:

```vue
<NetworkExperimentsTable 
  :experiments="experiments"
  :theme="{
    primaryColor: '#4F46E5',   // Copy button color
    secondaryColor: '#14B8A6', // Copied state color
    borderColor: '#E5E7EB',    // Table borders
    textColor: '#111827',      // Main text color
    linkColor: '#4F46E5'       // Link color
  }"
/>
```

## Responsive Design

- **Desktop (>768px)**: Traditional table layout
- **Mobile (≤768px)**: Card-based layout for better mobile experience

## Browser Support

- Modern browsers with ES6 support
- Clipboard API support (with fallback for older browsers)

## Integration Examples

### Nuxt 3 / CoherenceStream

```vue
<script setup>
import NetworkExperimentsTable from '~/components/NetworkExperimentsTable.vue'
// ... rest of your code
</script>
```

### Plain Vue 3 App

```javascript
import { createApp } from 'vue'
import NetworkExperimentsTable from './NetworkExperimentsTable.vue'

const app = createApp({
  components: {
    NetworkExperimentsTable
  }
})
```

### As a Web Component (Future Enhancement)

For maximum portability across different frameworks, the component could be wrapped as a web component.

## Styling

The component uses scoped styles with CSS custom properties for theming. All styles are self-contained to avoid conflicts with host applications.

## Accessibility

- Semantic HTML table structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader friendly

## Future Enhancements

1. **Sorting**: Add column sorting functionality
2. **Filtering**: Add search/filter capabilities
3. **Pagination**: Support for large datasets
4. **Export**: CSV/JSON export functionality
5. **Web Component**: Package as a web component for non-Vue apps
6. **CDN Distribution**: Provide CDN links for easy integration