import './Header.css'
import { FaBed } from 'react-icons/fa'
import { AiFillCar } from 'react-icons/ai'
import { BsFillAirplaneFill } from 'react-icons/bs'
import { BsCalendar3, BsFillFilePersonFill } from 'react-icons/bs'
import { DateRange } from 'react-date-range'
import { useState } from 'react'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'

const Header = ({ type }) => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ])
  const [openDate, setOpenDate] = useState(false)
  const [destination, setDestination] = useState('')
  const [options, setOptions] = useState({
    children: 2,
    adults: 2,
    rooms: 1,
  })
  const [openOptions, setOpenOptions] = useState(false)

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      const newValue = operation === 'i' ? prev[name] + 1 : prev[name] - 1
      if (newValue < 1) {
        return prev
      }
      return {
        ...prev,
        [name]: newValue,
      }
    })
  }
  const navigate = useNavigate()

  const handleSearch = () => {
    navigate('/list', { state: { destination, date, options } })
  }

  return (
    <div className='header'>
      <div
        className={
          type === 'list' ? 'headerContainer listMode' : 'headerContainer'
        }
      >
        <div className='headerList'>
          <div className='headerListItem active'>
            <FaBed />
            <span>stays</span>
          </div>
          <div className='headerListItem'>
            <BsFillAirplaneFill />
            <span>flights</span>
          </div>
          <div className='headerListItem'>
            <AiFillCar />
            <span>car rentals</span>
          </div>
          <div className='headerListItem'>
            <FaBed />
            <span>attractions</span>
          </div>
          <div className='headerListItem'>
            <AiFillCar />
            <span>airport taxis</span>
          </div>
        </div>
        {type !== 'list' && (
          <>
            <h1 className='headerTitle'>
              Enjoy your stay and also travel the world
            </h1>
            <p className='headerDesc'>
              Get rewarded for travelling and also enjoy amazing discounts on
              booking
            </p>
            <button className='headerBtn'>signin/register</button>
            {/* search/book */}
            <div className='headerSearch'>
              <div className='headerSearchItem'>
                <FaBed />
                <input
                  type='text'
                  className='headerSearchInput'
                  placeholder='where are you going?'
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className='headerSearchItem'>
                <BsCalendar3 className='headerIcon' />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className='headerSearchText'
                >
                  {`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
                    date[0].endDate,
                    'MM/dd/yyyy'
                  )}`}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    minDate={new Date()}
                    ranges={date}
                    className='date'
                  />
                )}
              </div>
              <div className='headerSearchItem'>
                <BsFillFilePersonFill className='headerIcon' />
                <span
                  className='headerSearchText'
                  onClick={() => setOpenOptions(!openOptions)}
                >
                  {`${options.adults} adult . ${options.children} children . ${options.rooms} room`}
                </span>
                {openOptions && (
                  <div className='options'>
                    <div className='optionItem'>
                      <span className='optionText'>adults</span>
                      <div className='optionCounter'>
                        <button
                          className='optionCounterButton'
                          onClick={() => handleOption('adults', 'd')}
                        >
                          -
                        </button>
                        <span className='optionCounterNumber'>
                          {options.adults}
                        </span>
                        <button
                          className='optionCounterButton'
                          onClick={() => handleOption('adults', 'i')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className='optionItem'>
                      <span className='optionText'>children</span>
                      <div className='optionCounter'>
                        <button
                          className='optionCounterButton'
                          onClick={() => handleOption('children', 'd')}
                        >
                          -
                        </button>
                        <span className='optionCounterNumber'>
                          {options.children}
                        </span>
                        <button
                          className='optionCounterButton'
                          onClick={() => handleOption('children', 'i')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className='optionItem'>
                      <span className='optionText'>rooms</span>
                      <div className='optionCounter'>
                        <button
                          className='optionCounterButton'
                          onClick={() => handleOption('rooms', 'd')}
                        >
                          -
                        </button>
                        <span className='optionCounterNumber'>
                          {options.rooms}
                        </span>
                        <button
                          className='optionCounterButton'
                          onClick={() => handleOption('rooms', 'i')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className='headerSearchItem'>
                <button className='headerBtn' onClick={handleSearch}>
                  search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Header
