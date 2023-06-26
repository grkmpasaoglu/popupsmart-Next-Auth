import React from 'react';


const Sidebar = () => {
  return (
    <div className="flex flex-col border w-72">
      <img id='logoside' src="/assets/logo.jpg" alt="Popupsmart Logo" className='mt-3 ml-3' />
      <ul className='mt-12 ml-4 '>
        <li><button className='mb-2 py-2 rounded-md w-64 h-10 flex hover:bg-slate-200 transition duration-300'> <img id='foldericon' className='float-left mr-3 ml-3' src='/assets/folder.png'></img>Campaigns</button></li>
        <li><button className='mb-2 py-2 rounded-md w-64 h-10 flex hover:bg-slate-200 transition duration-300'> <img id='foldericon' className='float-left mr-3 ml-3' src='/assets/data-analytics.png'></img>Analytics</button></li>
        <li><button className='mb-2 py-2 rounded-md w-64 h-10 flex hover:bg-slate-200 transition duration-300'> <img id='foldericon' className='float-left mr-3 ml-3' src='/assets/student-profile.png'></img>Leads</button></li>
      </ul>

      <ul className='mt-auto ml-5 mr-5'>
        <ul>
          <li><button className='mb-1 py-2 rounded-full w-64 h-10 flex hover:bg-slate-200 transition duration-300'> <img id='foldericon' className='float-left mr-3 ml-3' src='/assets/question.jpg'></img>Help</button></li>
          <li><button className='mb-1 py-2 rounded-full w-64 h-10 flex hover:bg-slate-200 transition duration-300'> <img id='foldericon' className='float-left mr-3 ml-3' src='/assets/bell.jpg'></img>What's New ?</button></li>
          <li><button className='mb-1 py-2 rounded-full w-64 h-10 flex hover:bg-slate-200 transition duration-300'> <img id='foldericon' className='float-left mr-3 ml-3' src='/assets/embed.jpg'></img>Embed Code</button></li>
        </ul>
        <hr className='mb-6 mt-6'></hr>
        <li className="flex justify-between">
          <div>Basic</div>
          <div className="float-right text-xs">58/100.000</div>
        </li>
        <li><img src="/assets/pbar.jpg" alt="" /></li>
        <li><button className='mb-5 mt-5 border-[2px] p-[3px] rounded-full text-xs'>Upgrade</button></li>
        <li className='mt-5'><button className=''> <img id='caseicon' className='float-left mr-2' src='/assets/case.jpg'></img><a className='text-sm'>Görkem Paşaoğlu <span className="flex text-xs"> Görkem Paşaoğlu's Organization</span></a></button></li>
      </ul>

    </div>
  );
};

const Content = () => {

  return (
    <div className="flex-grow bg-white px-24 py-10">
      <div className='flex'>
        <h1 className='float-left font-bold'>Campaigns</h1>
        <button className='ml-auto rounded-md bg-blue-500 w-40 h-8 text-white font-medium'>+ New Campaign</button>
      </div>
      <hr className='mb-6 mt-6'></hr>
      <div className='flex'>
        <input type="text" placeholder='Search campaigns' className='bg-zinc-100 w-64 h-10 rounded-md px-3 text-xs hover:bg-zinc-200' />
        <button className='rounded-md border h-9 w-64 mt-1 ml-3 flex p-2 text-sm text-slate-700 hover:border-blue-700'>Select domains</button>
        <button className='h-9 w-30 ml-auto p-2 text-sm text-slate-700'>Last added ↓</button>
      </div>
      <div className='mt-6 flex hover:shadow-lg transition duration-300'>
        <div className="flex border rounded-lg w-full h-24">
          <div className="p-5 w-1/3" id='mycol'>
            <span className="text-sm font-semibold">Test Campaign</span>
            <img src="/assets/wwwicon.jpg" id="wwwicon" alt="" className="mt-2" />
          </div>
          {/* <div> */}
          <div className="p-5 w-1/6 ml-20">
            <span className="text-sm font-semibold">28</span>
            <br />
            <span className='text-slate-500 text-xs'>Views</span>
          </div>
          <div className="p-5 w-1/6">
            <span className="text-sm font-semibold">0</span>
            <br />
            <span className='text-slate-500 text-xs'>Interactions</span>
          </div>
          <div className="p-5 w-1/6">
            <span className="text-sm font-semibold">0.00%</span>
            <br />
            <span className='text-slate-500 text-xs'>Rate</span>
          </div>
          {/* </div> */}
          <div className="p-5 flex justify-start">
            <label htmlFor="switch" className="flex items-center cursor-pointer">
              <span className="relative">
                <input type="checkbox" id="switch" className="sr-only" />
                <div className="block bg-gray-200 w-14 h-8 rounded-full"></div>
                <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
              </span>
            </label>
          </div>
          <div className="p-5 flex justify-start  mt-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <button className=' bg-slate-200 w-32 h-10 rounded-lg'>
              <span className='text-xs font-bold flex-nowrap'>Edit Campaign</span>
            </button>
            <div className="flex">
              <div className="w-1/3">
                <button><span><img id='foldericon' className='float-left mr-3 ml-3 mt-3' src='/assets/student-profile.png'></img></span></button>
              </div>
              <div className="w-1/3">
                <button><span><img id='foldericon' className='float-left mr-3 ml-3 mt-3' src='/assets/data-analytics.png'></img></span></button>
              </div>
              <div className="w-1/3">
                <button> <span><img id='foldericon' className='float-left mr-3 ml-3 mt-3' src='/assets/dupliblack.jpg'></img></span></button>
              </div>
            </div>
          </div>
          <div><img src="/assets/dots.jpg" alt="" className='w-2 mr-8 mt-9' /></div>
        </div>
      </div>

    </div>
  );
};

const CampaignsPage: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Content />
    </div>
  );
};

export default CampaignsPage;