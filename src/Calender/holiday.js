const eventsBank = [
    {
        "name": "New Year's Day",
        "date": "2023-01-01",
        "state": "All India"
    },
    {
        "name": "Makar Sankranti",
        "date": "2023-01-14",
        "state": "Andhra Pradesh, Assam, Bihar, Chhattisgarh, Gujarat, Haryana, Jharkhand, Karnataka, Kerala, Madhya Pradesh, Maharashtra, Odisha, Punjab, Rajasthan, Sikkim, Telangana, Tamil Nadu, Uttar Pradesh, Uttarakhand, West Bengal"
    },
    {
        "name": "Republic Day",
        "date": "2023-01-26",
        "state": "All India"
    },
    {
        "name": "Maha Shivaratri",
        "date": "2023-02-20",
        "state": "Andhra Pradesh, Gujarat, Karnataka, Maharashtra, Odisha, Tamil Nadu, Telangana, Uttar Pradesh"
    },
    {
        "name": "Holi",
        "date": "2023-03-13",
        "state": "All India"
    },
    {
        "name": "Good Friday",
        "date": "2023-04-07",
        "state": "All India, except Haryana and Madhya Pradesh"
    },
    {
        "name": "Dr. Babasaheb Ambedkar Jayanti",
        "date": "2023-04-14",
        "state": "All India, except Haryana, Jharkhand, Karnataka, Maharashtra, and Uttar Pradesh"
    },
    {
        "name": "Easter Sunday",
        "date": "2023-04-09",
        "state": "Kerala"
    },
    {
        "name": "Buddha Purnima",
        "date": "2023-04-29",
        "state": "All India, except Haryana, Jharkhand, and Karnataka"
    },
    {
        "name": "Eid al-Fitr",
        "date": "2023-04-25",
        "state": "Kerala"
    },
    {
        "name": "Eid al-Adha",
        "date": "2023-07-07",
        "state": "Kerala"
    },
    {
        "name": "Independence Day",
        "date": "2023-08-15",
        "state": "All India"
    },
    {
        "name": "Ganesh Chaturthi",
        "date": "2023-08-28",
        "state": "Andhra Pradesh, Goa, Gujarat, Karnataka, Maharashtra, Telangana"
    },
    {
        "name": "Muharram",
        "date": "2023-08-31",
        "state": "Kerala"
    },
    {
        "name": "Mahatma Gandhi Jayanti",
        "date": "2023-10-02",
        "state": "All India"
    },
    {
        "name": "Dussehra",
        "date": "2023-10-05",
        "state": "Andhra Pradesh, Assam, Bihar, Chhattisgarh, Delhi, Goa, Gujarat, Haryana, Himachal Pradesh, Jharkhand, Karnataka, Kerala, Madhya Pradesh, Maharashtra, Odisha, Punjab, Rajasthan, Sikkim, Telangana, Tamil Nadu, Uttar Pradesh, Uttarakhand, West Bengal"
    },
    {
        "name": "Diwali",
        "date": "2023-10-23",
        "state": "All India, except Assam, Goa, Kerala, Tamil Nadu"
    },
    {
        "name": "Guru Nanak Jayanti",
        "date": "2023-11-07",
        "state": "Punjab"
    },
    {
        "name": "Christmas Day",
        "date": "2023-12-25",
        "state": "All India"
    },
    {
        "name": "Boxing Day",
        "date": "2023-12-26",
        "state": "Meghalaya, Nagaland"
    }
]
const holidays = eventsBank.map((event) => ({
    title: event.name,
    start: new Date(event.date),
    end: new Date(event.date),
    state: event.state
}))

export default holidays