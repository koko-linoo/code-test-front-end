import spinnerImage from '@assets/images/spinner.png'

export default function Loading() {
    return (
        <div className="flex items-center space-x-2">
            <img className="w-8 h-8 animate-spin " src={spinnerImage} />
            <span>Loading ...</span>
        </div>
    )
}