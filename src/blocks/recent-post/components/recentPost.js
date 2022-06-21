import { RawHTML, useState } from '@wordpress/element';

export default function RecentPost({ date, title, image, post_url }) {
    function ordinal_suffix_of(i) {
        var j = i % 10,
            k = i % 100;
        if (j == 1 && k != 11) {
            return i + "st";
        }
        if (j == 2 && k != 12) {
            return i + "nd";
        }
        if (j == 3 && k != 13) {
            return i + "rd";
        }
        return i + "th";
    }

    const getMonthName = monthNumber => {
        const all_months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
        return String(all_months[monthNumber])
    }

    const getFormattedDate = date => {
        return ordinal_suffix_of(date)
    }

    const format_date = date => {
        const date_obj = new Date(date)
        return `${getFormattedDate(date_obj.getDate())} ${getMonthName(date_obj.getMonth())}, ${date_obj.getFullYear()}`
    }

    return (
        <div className="single-popular-item d-flex flex-wrap align-items-center">
            <div className="popular-item-thumb">
                <img src={image?.source_url} alt={image?.alt_text} />
            </div>
            <div className="popular-item-content">
                <span className="blog-date">{format_date(date)}</span>
                <h4 className="title">
                    <a href={post_url}>
                    {
                        title 
                            ? <RawHTML>{title}</RawHTML>
                            : __('(No title)', 'latest-posts')
                    }
                    </a>
                </h4>
            </div>
        </div>
    )
}
