<template>
  <div class="loader-icon">
    <svg
      class="loader-icon__svg animated_loading_icon"
      width="40px"
      height="40px"
      viewBox="0 0 20 20"
    >
      <g
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          fill="#eee"
          fill-rule="nonzero"
        >
          <path
            d="M10,3 C6.13401,3 3,6.13401 3,10
            C3,10.2761 2.77614,10.5 2.5,10.5 C2.22386,10.5
            2,10.2761 2,10 C2,5.58172 5.58172,2 10,2
            C14.4183,2 18,5.58172 18,10 C18,14.4183
            14.4183,18 10,18 C9.72386,18 9.5,17.7761
            9.5,17.5 C9.5,17.2239 9.72386,17 10,17
            C13.866,17 17,13.866 17,10 C17,6.13401
            13.866,3 10,3 Z"
          />
        </g>
      </g>
    </svg>

    <slot />
  </div>
</template>

<style>
  .loader-icon {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .animated_loading_icon {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
