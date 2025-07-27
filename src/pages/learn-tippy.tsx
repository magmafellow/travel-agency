import LayoutRoot from '../layout/layout-root'
import ResponsiveContainer from '../components/ui/responsive-container'

export default function Page() {
  return (
    <LayoutRoot>
      <ResponsiveContainer>
        <button id='trigger-tippy'>tippy</button>

        <div className='popover tippy-popover' id='tippy-popover'>
          <h3 className='typo-h3'>Popover!</h3>
          <p>I am a strong popover</p>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos commodi error id odit ea exercitationem, ullam perspiciatis at autem sint voluptatem deserunt vel, sed molestias possimus cum doloremque veniam ad!</div>
        </div>
      </ResponsiveContainer>
    </LayoutRoot>
  )
}
