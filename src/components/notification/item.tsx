import classNames from "classnames";
 
export const NotificaitonItem = ({item,mini}:any) =>{

    return(
        <li className={classNames(
            'notify rounded-lg border-none flex items-center my-2 pl-4 bg-white',
            mini ? 'p-1': 'p-3',
            !item.err && item.read && 'gray',
        )}>
            <div>
                <div className={classNames(
                    'icon-circle',
                    item.read ? 'read' : 'unread',
                    item.err && 'err',
                )}>
                    {item.icon}
                </div>
            </div>
            <div className={classNames(
                'ml-2',
                !item.err && item.read && 'gray'
            )}>
                r<h3 className={classNames(
                    'action font-semibold',
                    item.err ? 'text-[#e30a17]' : 'text-yg-blue'
                )}
                >{item.action}</h3>
                <p className='message'>{item.message}</p>
            </div>
        </li>
    )
}
