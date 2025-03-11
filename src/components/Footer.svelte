<!-- src/components/Footer.svelte -->
<script>
    export let companyName = "EdwardRBacon";
    /**
	 * @type {any[]}
	 */
     export let socialLinks = [];
    /**
	 * @type {any[]}
	 */
     export let footerLinks = [];
    
    const currentYear = new Date().getFullYear();
  </script>
  
  <footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <!-- Company info -->
        <div class="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 class="text-xl font-bold mb-4">{companyName}</h3>
          <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac justo eget urna commodo bibendum.</p>
          
          <!-- Social media links -->
          <div class="flex space-x-4">
            {#each socialLinks as link}
              <a href={link.href} class="hover:text-blue-400 transition duration-150">
                <!-- You can replace this with proper icons -->
                <span>{link.icon}</span>
              </a>
            {/each}
          </div>
        </div>
        
        <!-- Footer links -->
        <div class="w-full md:w-2/3 flex flex-wrap">
          {#each footerLinks as section}
            <div class="w-1/2 md:w-1/3 mb-6">
              <h4 class="font-bold mb-4">{section.title}</h4>
              <ul>
                {#each section.links as link}
                  <li class="mb-2">
                    <a href={link.href} class="hover:text-blue-400 transition duration-150">
                      {link.label}
                    </a>
                  </li>
                {/each}
              </ul>
            </div>
          {/each}
        </div>
      </div>
      
      <div class="border-t border-gray-700 mt-8 pt-6 text-sm text-gray-400">
        <p>&copy; {currentYear} {companyName}. All rights reserved.</p>
      </div>
    </div>
  </footer>